
struct Codec {}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Codec {
  fn new() -> Self {
    Self {}
  }

  fn encode(&self, strs: Vec<String>) -> String {
    let mut ret = String::new();
    for s in strs {
      for b in s.bytes() {
        ret.push_str(&format!("%{:03}", b));
      }
      ret.push_str("%256");
    }
    ret
  }

  fn decode(&self, s: String) -> Vec<String> {
    let strs: Vec<&str> = s.split('%').collect();
    let mut ret = vec![];
    // println!("strs: {:?}", strs);
    let mut bytes: Vec<u8> = vec![];
    for b in strs {
      if b.len() == 0 {
        continue;
      }
      // println!("byte: {}", b);
      let b = b.parse::<u16>().unwrap();
      if b >= 256 {
        ret.push(String::from_utf8(bytes).unwrap());
        bytes = vec![];
      } else {
        bytes.push(b as u8);
      }
    }
    ret
  }
}

#[test]
fn test_codec() {
  let strs = vec!["abc".to_string(), "def".to_string()];
  let codec = Codec::new();
  let actual = codec.encode(strs.clone());
  println!("{:?}", actual);
  let actual = codec.decode(actual);
  assert_eq!(actual, strs);
}
