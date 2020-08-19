use std::collections::HashMap;

#[derive(Debug)]
struct Solution {}

impl Solution {
  fn is_match(s1: &String, s2: &String) -> bool {
    if s1.len() != s2.len() {
      return false;
    }
    let b1: Vec<u8> = s1.bytes().collect();
    let b2: Vec<u8> = s2.bytes().collect();

    let calc = |a, b| (a as i32 - b as i32 + 26) % 26; 
    let diff = calc(b1[0], b2[0]);
    for i in 1..b1.len() {
      if calc(b1[i], b2[i]) != diff {
        return false;
      }
    }

    true
  }
  pub fn group_strings(strings: Vec<String>) -> Vec<Vec<String>> {
    let mut map: HashMap<String, Vec<String>> = HashMap::new();
    for s in strings {
      let mut hit = false;
      for (k, v) in &mut map {
        if Self::is_match(&k, &s) {
          v.push(s.clone());
          hit = true;
          break;
        }
      }
      if !hit {
        map.insert(s.clone(), vec![s.clone()]);
      }
    }

    map.values().cloned().collect()
  }
}

#[test]
fn test() {

  let strings = vec_of_strings!["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"];
  let expect = vec![
    vec_of_strings!["abc","bcd","xyz"],
    vec_of_strings!["az","ba"],
    vec_of_strings!["acef"],
    vec_of_strings!["a","z"]
  ];
  let actual = Solution::group_strings(strings);
  assert_eq!(actual, expect);
}
