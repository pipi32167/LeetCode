#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn num_smaller_by_frequency(queries: Vec<String>, words: Vec<String>) -> Vec<i32> {

    let f = |chars: &[u8]| -> i32 {
      let mut c = chars[0];
      let mut cnt = 1;
      for i in 1..chars.len() {
        if c > chars[i] {
          c = chars[i];
          cnt = 1;
        } else if c == chars[i] {
          cnt += 1;
        }
      }
      cnt
    };

    let collect = |queries: Vec<String>| -> Vec<i32> {
      queries.iter().map(|x| f(x.as_bytes())).collect()
    };
    let queries = collect(queries);
    let words = collect(words);
    let ret = queries.iter()
      .map(|x| words.iter().fold(0, |acc, y| acc + if x < y { 1 } else { 0 } ))
      .collect();
    ret
  }
}

#[test]
fn test() {
  let queries = vec_of_strings!["cbd"];
  let words = vec_of_strings!["zaaaz"];
  let expect = vec![1];
  assert_eq!(Solution::num_smaller_by_frequency(queries, words), expect);

  let queries = vec_of_strings!["bbb","cc"];
  let words = vec_of_strings!["a","aa","aaa","aaaa"];
  let expect = vec![1,2];
  assert_eq!(Solution::num_smaller_by_frequency(queries, words), expect);
}