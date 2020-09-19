use std::collections::HashMap;

#[derive(Debug)]
struct Solution {}

macro_rules! vec_of_strings {
  ($($x:expr),*) => (vec![$($x.to_string()),*]);
}

impl Solution {
  pub fn number_to_words(mut num: i32) -> String {
    if num == 0 {
      return "Zero".to_owned();
    }
    let mut nums = vec![];
    while num > 0 {
      nums.push(num % 10);
      num /= 10;
    }

    let level = vec_of_strings!["", "Thousand", "Million", "Billion"];
    let num_strings: HashMap<i32, &str> = [
      (0, "Zero"),
      (1, "One"),
      (2, "Two"),
      (3, "Three"),
      (4, "Four"),
      (5, "Five"),
      (6, "Six"),
      (7, "Seven"),
      (8, "Eight"),
      (9, "Nine"),
      (10, "Ten"),
      (11, "Eleven"),
      (12, "Twelve"),
      (13, "Thirteen"),
      (14, "Fourteen"),
      (15, "Fifteen"),
      (16, "Sixteen"),
      (17, "Seventeen"),
      (18, "Eighteen"),
      (19, "Nineteen"),
      (20, "Twenty"),
      (30, "Thirty"),
      (40, "Forty"),
      (50, "Fifty"),
      (60, "Sixty"),
      (70, "Seventy"),
      (80, "Eighty"),
      (90, "Ninety"),
    ]
    .iter()
    .cloned()
    .collect();

    let slice = |ns: &Vec<i32>, begin: usize, end: usize| -> Vec<i32> {
      ns.iter().cloned().skip(begin).take(end - begin).collect()
    };

    let convert = |mut ns: Vec<i32>, step: usize| -> Vec<&str> {
      ns.reverse();
      let mut ret = vec![];
      if ns[0] > 0 {
        ret.push(*num_strings.get(&ns[0]).unwrap());
        ret.push("Hundred");
      }
      if ns[1] > 1 {
        ret.push(*num_strings.get(&(ns[1] * 10)).unwrap());
        if ns[2] > 0 {
          ret.push(*num_strings.get(&ns[2]).unwrap());
        }
      } else {
        let num = ns[1] * 10 + ns[2];
        if num > 0 {
          ret.push(*num_strings.get(&num).unwrap());
        }
      }
      if level[step].len() > 0 && ret.len() > 0 {
        ret.push(&level[step]);
      }
      ret.reverse();
      ret
    };

    let mut i = 0;
    let mut j = 0;
    let mut ret = vec![];
    while i < nums.len() {
      let mut nums2 = slice(&nums, i, i + 3);
      if nums2.len() < 3 {
        nums2.extend(vec![0; 3 - nums2.len()]);
      }
      ret.extend(convert(nums2, j));
      i += 3;
      j += 1;
    }

    ret.reverse();
    String::from(ret.join(" ").trim())
  }
}

#[test]
fn test() {
  let num = 0;
  let expect = "Zero".to_owned();
  assert_eq!(Solution::number_to_words(num), expect);
  let num = 20;
  let expect = "Twenty".to_owned();
  assert_eq!(Solution::number_to_words(num), expect);
  let num = 100;
  let expect = "One Hundred".to_owned();
  assert_eq!(Solution::number_to_words(num), expect);
  let num = 1000;
  let expect = "One Thousand".to_owned();
  assert_eq!(Solution::number_to_words(num), expect);
  let num = 1000000;
  let expect = "One Million".to_owned();
  assert_eq!(Solution::number_to_words(num), expect);
  let num = 1000000000;
  let expect = "One Billion".to_owned();
  assert_eq!(Solution::number_to_words(num), expect);
  let num = 1000000001;
  let expect = "One Billion One".to_owned();
  assert_eq!(Solution::number_to_words(num), expect);
  let num = 123;
  let expect = "One Hundred Twenty Three".to_owned();
  assert_eq!(Solution::number_to_words(num), expect);
  let num = 12345;
  let expect = "Twelve Thousand Three Hundred Forty Five".to_owned();
  assert_eq!(Solution::number_to_words(num), expect);
  let num = 1234567;
  let expect = "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven".to_owned();
  assert_eq!(Solution::number_to_words(num), expect);
  let num = 1234567891;
  let expect = "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One".to_owned();
  assert_eq!(Solution::number_to_words(num), expect);

}
