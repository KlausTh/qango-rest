extern crate actix_web;
extern crate listenfd;
extern crate qango;
extern crate serde;
extern crate futures;

mod res;

use actix_web::{get, App, HttpResponse, HttpServer};
use actix_web::web::Path;
use actix_web::middleware::DefaultHeaders;
use listenfd::ListenFd;
use qango::board::Board;
use qango::player::Player;
use qango::player::deep::Deep;
use res::JsonBoard;


#[get("/version")]
async fn version() -> HttpResponse {
    HttpResponse::Ok().body("{\"version\": \"0.1\"}")
}

#[get("/start")]
async fn start() -> HttpResponse {
    HttpResponse::PermanentRedirect().header("Location", "/board/0").finish()
}

#[get("/board/{id}")]
async fn board(info : Path<u64>) -> HttpResponse {
    match Board::decode(*info) {
        Ok(board) => HttpResponse::Ok().json(JsonBoard(board)),
        Err(msg)  => HttpResponse::BadRequest().header("X-msg", msg).finish(),
    }
}

#[get("/board/{id}/turn/{pos}")]
async fn turn(info : Path<(u64, usize)>) -> HttpResponse {
    match Board::decode(info.0) {
        Ok(b) => {
            let next : u64 = b.turn(info.1).into();
            let url = format!("/board/{}", next);

            HttpResponse::PermanentRedirect().header("Location", url).finish()
        }
        Err(msg) => HttpResponse::BadRequest().header("X-msg", msg).finish(),
    }
}

#[get("/board/{id}/aiturn")]
async fn ai_turn(info : Path<u64>) -> HttpResponse {
    match Board::decode(*info) {
        Ok(b) => {
            let pos = Deep::new(0).turn(&b);
            let next_id : u64 = b.turn(pos).into();
            let url = format!("/board/{}",next_id);

            HttpResponse::PermanentRedirect().header("location", url).finish()
        }
        Err(msg) => HttpResponse::BadRequest().header("X-msg", msg).finish(),
    }
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    let mut listenfd = ListenFd::from_env();
    let mut server = HttpServer::new(|| {
        App::new()
            .wrap(DefaultHeaders::new().header("Access-Control-Allow-Origin", "*"))
            .service(version)
            .service(start)
            .service(board)
            .service(ai_turn)
            .service(turn)
    });

    server = if let Some(l) = listenfd.take_tcp_listener(0).unwrap() {
        server.listen(l)?
    } else {
        server.bind("127.0.0.1:8080")?
    };

    server.run().await
}
