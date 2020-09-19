use std::collections::HashMap;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn freq_alphabets(s: String) -> String {
    let mut map: HashMap<String, char> = HashMap::new();
    for i in 1..=9 {
      map.insert(format!("{}", i), (b'a' + i - 1) as char);
    }
    for i in 10..=26 {
      map.insert(format!("{}#", i), (b'a' + i - 1) as char);
    }
    // println!("{:?}", map);
    let chars: Vec<char> = s.chars().collect();
    let mut i = 0;
    let mut ret = String::new();
    while i < chars.len() {
      if i + 2 < chars.len() && chars[i + 2] == '#' {
        let key: String = chars.iter().skip(i).take(3).collect();
        // println!("{}", key);
        ret.push(map.get(&key).unwrap().clone());
        i += 3;
      } else {
        let key = chars[i].to_string();
        ret.push(map.get(&key).unwrap().clone());
        i += 1;
      }
    }
    ret
  }
}

#[test]
fn test() {
  assert_eq!(
    Solution::freq_alphabets("10#11#12".to_owned()),
    "jkab".to_owned()
  );

  assert_eq!(
    Solution::freq_alphabets("1326#".to_owned()),
    "acz".to_owned()
  );

  assert_eq!(Solution::freq_alphabets("25#".to_owned()), "y".to_owned());
  assert_eq!(
    Solution::freq_alphabets(
      "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#".to_owned()
    ),
    "abcdefghijklmnopqrstuvwxyz".to_owned()
  );
}
