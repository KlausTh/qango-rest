
use qango::board::Board;
use qango::board::side::Side;
use actix_web::{Error, HttpRequest, HttpResponse, Responder};
use serde_json;
use futures::future::{ready, Ready};
use serde::ser::{Serializer, SerializeStruct, Serialize};

// Serde wrapper for qango::board::Board
pub struct JsonBoard(pub Board);

// Serde wrapper for qango::board::side:Side
pub struct JsonSide(pub Side);

impl Responder for JsonBoard {
    type Error = Error;
    type Future = Ready<Result<HttpResponse, Error>>;

    fn respond_to(self, _req: &HttpRequest) -> Self::Future {
		let body = serde_json::to_string(&self).unwrap();

        ready(Ok(HttpResponse::Ok().content_type("application/json").body(body)))
    }
}

impl Serialize for JsonBoard {
	fn serialize<S>(&self, serializer : S ) -> Result<S::Ok, S::Error>
	where
		S : Serializer,
	{
		match *self {
			JsonBoard(board) => {
				let mut sb = serializer.serialize_struct("Board", 3)?;

				sb.serialize_field::<u64>("id", &board.into())?;
				sb.serialize_field("won", &JsonSide(board.won()))?;
				sb.serialize_field("winning_fields", &board.get_winning_fields())?;
				sb.serialize_field("next", &JsonSide(board.get_next()))?;
				let jfield : Vec<JsonSide> = board.get_elements().iter().map( |s| JsonSide(*s)).collect();
				sb.serialize_field("field", &jfield)?;
				sb.end()
			}
		}
	}
}

impl Serialize for JsonSide {
	fn serialize<S>(&self, serializer : S) -> Result<S::Ok, S::Error>
	where
		S : Serializer,
	{
		match *self {
			JsonSide(side) => match side {
				Side::NONE  => serializer.serialize_unit_variant("Side", 0, "none"),
				Side::WHITE => serializer.serialize_unit_variant("Side", 1, "white"),
				Side::BLACK => serializer.serialize_unit_variant("Side", 2, "black"),
			}
		}
	}
}

#[cfg(test)]
mod test {
	use std::iter::repeat;
	use super::*;

	#[test]
	fn jsonside_test() {
		let json = serde_json::to_string(&JsonSide(Side::NONE)).unwrap();

		assert_eq!(json, "\"none\"");
	}

	#[test]
	fn jsonboard_test() {
		let json = serde_json::to_string(&JsonBoard(qango::board::START)).unwrap();

		assert_eq!(json,
			repeat("\"none\"").take(35).fold(String::from("{\"won\":\"none\",\"next\":\"white\",\"field\":[\"none\""), |a, n| a + "," + n)
			 + "]}");
	}
}
