use std::cmp::Ordering;

struct LogSystem {
  logs: Vec<(i32, String)>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl LogSystem {
  fn new() -> Self {
    Self { logs: vec![] }
  }

  fn put(&mut self, id: i32, timestamp: String) {
    self.logs.push((id, timestamp));
  }

  fn retrieve(&self, s: String, e: String, gra: String) -> Vec<i32> {
    let types = vec!["Year", "Month", "Day", "Hour", "Minute", "Second"];
    let mut ret = vec![];
    if let Some(idx) = types.iter().position(|&x| x == gra) {
      let convert = |timestamp: String| {
        timestamp
          .split(":")
          .collect::<Vec<&str>>()
          .iter()
          .enumerate()
          .map(|(i, &x)| if i <= idx { x } else { "00" })
          .collect::<Vec<&str>>()
          .join(":")
      };
      let s = convert(s);
      let e = convert(e);
      // println!("s: {}, e: {}", s, e);
      for (id, timestamp) in &self.logs {
        let timestamp = convert(timestamp.clone());
        let ord1 = s.cmp(&timestamp);
        let ord2 = timestamp.cmp(&e);
        // println!("ts: {}, ord1: {:?}, ord2: {:?}", timestamp, ord1, ord2);
        if (ord1 == Ordering::Less || ord1 == Ordering::Equal)
          && (ord2 == Ordering::Less || ord2 == Ordering::Equal)
        {
          ret.push(*id)
        }
      }
    }
    ret
  }
}

#[test]
fn test() {
  let mut logs = LogSystem::new();

  logs.put(1, "2017:01:01:23:59:59".to_string());
  logs.put(2, "2017:01:01:22:59:59".to_string());
  logs.put(3, "2016:01:01:00:00:00".to_string());
  assert_eq!(
    logs.retrieve(
      "2016:01:01:01:01:01".to_string(),
      "2017:01:01:23:00:00".to_string(),
      "Year".to_string()
    ),
    vec![1, 2, 3]
  );
  assert_eq!(
    logs.retrieve(
      "2016:01:01:01:01:01".to_string(),
      "2017:01:01:23:00:00".to_string(),
      "Hour".to_string()
    ),
    vec![1, 2]
  );
}
