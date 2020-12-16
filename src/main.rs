
extern crate actix_web;
extern crate env_logger;
extern crate qango;
extern crate serde;
extern crate futures;

mod res;

use actix_files::Files;
use actix_web::{get, App, HttpResponse, HttpServer};
use actix_web::web::Path;
use actix_web::middleware::{Logger, DefaultHeaders};
use env_logger::Env;
use qango::board::Board;
use qango::player::Player;
use qango::player::simple::Simple;
use res::JsonBoard;

#[get("/version")]
async fn version() -> HttpResponse {
    HttpResponse::Ok().body("{\"version\": \"0.2\"}")
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
    match Board::decode(info.0.0) {
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
            let player = Simple::new(Box::from("easy"));
            let pos = player.turn(&b);
            let next_id : u64 = b.turn(pos).into();
            let url = format!("/board/{}",next_id);

            HttpResponse::PermanentRedirect().header("location", url).finish()
        }
        Err(msg) => HttpResponse::BadRequest().header("X-msg", msg).finish(),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::Builder::from_env(Env::default().default_filter_or("info")).init();

    let server = HttpServer::new(|| {
        App::new()
            .wrap(Logger::default())
            .wrap(DefaultHeaders::new().header("Access-Control-Allow-Origin", "*"))
            .service(version)
            .service(start)
            .service(board)
            .service(ai_turn)
            .service(turn)
            .service(Files::new("/", "./client/").index_file("index.html"))
    });

    server.bind("0.0.0.0:8080")?.run().await
}
