use json::JsonValue;
use serde_json::Error;

#[derive(Debug, Clone)]
struct NestedInteger {
  _integer: Option<i32>,
  _list: Vec<Box<NestedInteger>>,
}

impl NestedInteger {
  fn new() -> Box<NestedInteger> {
    Box::new(NestedInteger {
      _integer: None,
      _list: vec![],
    })
  }

  fn is_integer(&self) -> bool {
    self._integer.is_some() && self._list.is_empty()
  }

  fn set_integer(&mut self, val: i32) {
    self._integer = Some(val)
  }

  fn get_integer(&self) -> Option<i32> {
    self._integer
  }

  fn add(&mut self, elem: Box<NestedInteger>) {
    self._list.push(elem)
  }

  fn get_list(&self) -> Vec<Box<NestedInteger>> {
    self._list.clone()
  }
}

fn parse(s: &str) -> JsonValue {
  json::parse(s).unwrap()
}

fn create(data: JsonValue) -> Box<NestedInteger> {
  let mut res = NestedInteger::new();
  match data {
    JsonValue::Array(v) => {
      for e in v {
        res.add(create(e))
      }
    }
    JsonValue::Number(_v) => res.set_integer(data.as_i32().unwrap()),
    _ => panic!("invalid json: {:#}", data),
  }
  res
}

fn deserialize(s: &str) -> Box<NestedInteger> {
  let res = parse(s);
  create(res)
}

#[test]
fn test_deserialize() {
  let res = deserialize("1");
  assert!(res.is_integer());
  assert_eq!(res.get_integer(), Some(1));

  let res = deserialize("123");
  assert!(res.is_integer());
  assert_eq!(res.get_integer(), Some(123));

  let res = deserialize("[]");
  assert!(!res.is_integer());
  assert_eq!(res.get_list().len(), 0);

  let res = deserialize("[[]]");
  assert!(!res.is_integer());
  assert_eq!(res.get_list().len(), 1);
  let res = res.get_list().into_iter().nth(0).unwrap();
  assert!(!res.is_integer());
  assert_eq!(res.get_list().len(), 0);

  let res = deserialize("[-1]");
  assert!(!res.is_integer());
  assert_eq!(res.get_list().len(), 1);
  let res = res.get_list().into_iter().nth(0).unwrap();
  assert!(res.is_integer());
  assert_eq!(res.get_integer(), Some(-1));

  let res = deserialize("[-1,-2]");
  assert!(!res.is_integer());
  assert_eq!(res.get_list().len(), 2);
  let res2 = res.get_list().into_iter().nth(0).unwrap();
  assert!(res2.is_integer());
  assert_eq!(res2.get_integer(), Some(-1));
  let res = res.get_list().into_iter().nth(1).unwrap();
  assert!(res.is_integer());
  assert_eq!(res.get_integer(), Some(-2));

  let res = deserialize("[123,456,[788,799,833],[[]],10,[]]");
  assert!(!res.is_integer());
  assert_eq!(res.get_list().len(), 6);
  let res2 = res.get_list().into_iter().nth(0).unwrap();
  assert!(res2.is_integer());
  assert_eq!(res2.get_integer(), Some(123));
  let res2 = res.get_list().into_iter().nth(1).unwrap();
  assert!(res2.is_integer());
  assert_eq!(res2.get_integer(), Some(456));
  let res2 = res.get_list().into_iter().nth(2).unwrap();
  assert!(!res2.is_integer());
  assert_eq!(res2.get_list().len(), 3);
  let res2 = res.get_list().into_iter().nth(3).unwrap();
  assert!(!res2.is_integer());
  assert_eq!(res2.get_list().len(), 1);
  let res2 = res.get_list().into_iter().nth(4).unwrap();
  assert!(res2.is_integer());
  assert_eq!(res2.get_integer(), Some(10));
  let res2 = res.get_list().into_iter().nth(5).unwrap();
  assert!(!res2.is_integer());
  assert_eq!(res2.get_list().len(), 0);

  // println!("{:?}", deserialize("1"));
  // println!("{:?}", deserialize("123"));
  // println!("{:?}", deserialize("[]"));
  // println!("{:?}", deserialize("[[]]"));
  // println!("{:?}", deserialize("[-1]"));
  // println!("{:?}", deserialize("[-1,-2]"));
  // println!("{:?}", deserialize("[123,456,[788,799,833],[[]],10,[]]"));
}

#[derive(Serialize, Deserialize)]
struct Person {
  name: String,
  age: u8,
  phones: Vec<String>,
}

#[test]
fn test_serde_json() {
  let data = r#"{
    "name": "John Doe",
    "age": 43,
    "phones": [
      "+44 1234567",
      "+44 2345678"
    ]
  }"#;

  let r: Result<Person, Error> = serde_json::from_str(data);
  assert!(r.is_ok());
  let p: Person = r.unwrap();
  assert_eq!(p.name, "John Doe");
  assert_eq!(p.phones[0], "+44 1234567");
  assert_eq!(p.phones[1], "+44 2345678");

  let data = r"[]";
  let r: Result<Vec<u32>, Error> = serde_json::from_str(data);
  assert!(r.is_ok());
  let v: Vec<u32> = r.unwrap();
  assert_eq!(v.len(), 0);
  let data = r"[1,2,3,4,5,6]";
  let r: Result<Vec<u32>, Error> = serde_json::from_str(data);
  assert!(r.is_ok());
  let v: Vec<u32> = r.unwrap();
  assert_eq!(v.len(), 6);
}

#[test]
fn test_json() {
  let parsed = json::parse(
    r#"{
    "code": 200,
    "success": true,
    "payload": {
        "features": [
            "awesome",
            "easyAPI",
            "lowLearningCurve"
        ]
      }
    }"#,
  )
  .unwrap();

  let instantiated = object!{
      "code" => 200,
      "success" => true,
      "payload" => object!{
          "features" => array![
              "awesome",
              "easyAPI",
              "lowLearningCurve"
          ]
      }
  };

  assert_eq!(parsed, instantiated);

  let mut data = object!{
      "foo" => false,
      "bar" => json::Null,
      "answer" => 42,
      "list" => array![json::Null, "world", true]
  };

  // Partial equality is implemented for most raw types:
  assert!(data["foo"] == false);

  // And it's type aware, `null` and `false` are different values:
  assert!(data["bar"] != false);

  // But you can use any Rust number types:
  assert!(data["answer"] == 42);
  assert!(data["answer"] == 42.0);
  assert!(data["answer"] == 42isize);

  // Access nested structures, arrays and objects:
  assert!(data["list"][0].is_null());
  assert!(data["list"][1] == "world");
  assert!(data["list"][2] == true);

  // Error resilient - accessing properties that don't exist yield null:
  assert!(data["this"]["does"]["not"]["exist"].is_null());

  // Mutate by assigning:
  data["list"][0] = "Hello".into();

  // Use the `dump` method to serialize the data:
  assert_eq!(
    data.dump(),
    r#"{"foo":false,"bar":null,"answer":42,"list":["Hello","world",true]}"#
  );

  // Or pretty print it out:
  // println!("{:#}", data);
}

#[test]
fn test_json2() {
  let data = array![1, array![2, 3], array![4, 5, 6], array![]];
  // println!("{:#}", data);

  fn test(data: JsonValue) {
    // println!("{:#}", data);
    match data {
      JsonValue::Array(v) => {
        for e in v {
          test(e)
        }
      }
      _ => {}
    }
  }

  test(data);
}
