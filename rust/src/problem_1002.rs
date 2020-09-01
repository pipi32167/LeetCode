use std::collections::HashMap;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn common_chars(a: Vec<String>) -> Vec<String> {
    type CharCount = HashMap<char, usize>;

    let collect = |s: &String| -> CharCount {
      let mut map = CharCount::new();
      for c in s.chars() {
        let entry = map.entry(c).or_insert(0);
        *entry += 1;
      }
      map
    };

    let construct_result = |map: &CharCount| -> Vec<String> {
      let mut ret = vec![];
      for (c, cnt) in map {
        ret.extend(vec![c.to_string(); *cnt]);
      }
      ret
    };

    let maps: Vec<CharCount> = a.iter().map(collect).collect();
    if a.len() == 1 {
      return construct_result(&maps[0]);
    }

    let intersect = |map1: &CharCount, map2: &CharCount| -> CharCount {
      let mut ret = CharCount::new();

      for (c, cnt1) in map1 {
        let cnt2 = map2.get(c).unwrap_or(&0);
        let cnt = cnt1.min(cnt2);
        if *cnt > 0 {
          ret.insert(*c, *cnt);
        }
      }
      ret
    };

    let mut ret = intersect(&maps[0], &maps[1]);
    for i in 2..maps.len() {
      ret = intersect(&ret, &maps[i]);
    }
    construct_result(&ret)
  }
}

#[test]
fn test() {
  let a = vec_of_strings!["bella", "label", "roller"];
  let mut expect = vec_of_strings!["e", "l", "l"];
  let mut actual = Solution::common_chars(a);
  expect.sort(); actual.sort();
  assert_eq!(actual, expect);

  let a = vec_of_strings!["cool", "lock", "cook"];
  let mut expect = vec_of_strings!["c", "o"];
  let mut actual = Solution::common_chars(a);
  expect.sort(); actual.sort();
  assert_eq!(actual, expect);
}
