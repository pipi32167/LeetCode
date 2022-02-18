use std::collections::HashMap;

#[derive(Debug)]
struct Solution {}

impl Solution {
    pub fn anagram_mappings(a: Vec<i32>, b: Vec<i32>) -> Vec<i32> {
        let mut map: HashMap<i32, Vec<i32>> = HashMap::new();

        b.into_iter().enumerate().for_each(|(i, v)| {
            let entry = map.entry(v).or_insert(vec![]);
            entry.push(i as i32);
        });

        let mut ret = vec![];
        for v in a {
            let entry = map.entry(v).or_insert(vec![]);
            ret.push(entry.pop().unwrap());
        }
        ret
    }
}

#[test]
fn test() {

  let a = vec![12, 28, 46, 32, 50];
  let b = vec![50, 12, 32, 46, 28];
  let expect = vec![1, 4, 3, 2, 0];
  assert_eq!(Solution::anagram_mappings(a, b), expect);
}
