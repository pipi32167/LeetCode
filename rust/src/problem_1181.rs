use std::collections::HashSet;
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn before_and_after_puzzles(phrases: Vec<String>) -> Vec<String> {
    let phrases: Vec<Vec<String>> = phrases
      .iter()
      .map(|x| x.split(' ').map(|x| x.to_owned()).collect())
      .collect();

    // println!("{:?}", phrases);
    let mut ret: HashSet<String> = HashSet::new();
    for i in 0..phrases.len() {
      for j in 0..phrases.len() {
        if i == j {
          continue;
        }

        if phrases[i].last() == phrases[j].first() {
          let v = [
            phrases[i].clone(),
            phrases[j][1..].iter().cloned().collect(),
          ]
          .concat()
          .join(" ");
          ret.insert(v);
        }
      }
    }

    let mut ret = Vec::from_iter(ret.into_iter());
    ret.sort();
    ret
  }
}

#[test]
fn test() {
  let phrases = vec_of_strings!["writing code", "code rocks"];
  let expect = vec_of_strings!["writing code rocks"];
  let actual = Solution::before_and_after_puzzles(phrases);
  assert_eq!(actual, expect);
  let phrases = vec_of_strings![
    "mission statement",
    "a quick bite to eat",
    "a chip off the old block",
    "chocolate bar",
    "mission impossible",
    "a man on a mission",
    "block party",
    "eat my words",
    "bar of soap"
  ];
  let expect = vec_of_strings![
    "a chip off the old block party",
    "a man on a mission impossible",
    "a man on a mission statement",
    "a quick bite to eat my words",
    "chocolate bar of soap"
  ];
  let actual = Solution::before_and_after_puzzles(phrases);
  assert_eq!(actual, expect);

  let phrases = vec_of_strings![
    "mission statement",
    "a quick bite to eat",
    "a chip off the old block",
    "chocolate bar",
    "mission impossible",
    "a man on a mission",
    "block party",
    "eat my words",
    "bar of soap"
  ];
  let expect = vec_of_strings![
    "a chip off the old block party",
    "a man on a mission impossible",
    "a man on a mission statement",
    "a quick bite to eat my words",
    "chocolate bar of soap"
  ];
  let actual = Solution::before_and_after_puzzles(phrases);
  assert_eq!(actual, expect);
}
