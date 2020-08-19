use std::collections::HashSet;
use std::i32;
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

fn hour(arr: &Vec<i32>) -> i32 {
  arr[0] * 10 + arr[1]
}

fn minute(arr: &Vec<i32>) -> i32 {
  arr[2] * 10 + arr[3]
}

fn is_valid_timestamp(arr: &Vec<i32>) -> bool {
  hour(arr) < 24 && minute(arr) < 60
}

fn to_timestamp(time: &String) -> i32 {
  i32::from_str_radix(&time[0..2], 10).ok().unwrap() * 60
    + i32::from_str_radix(&time[3..], 10).ok().unwrap()
}

fn from_timestamp(time: i32) -> String {
  format!("{:02}:{:02}", time / 60, time % 60)
}

fn from_timestamp2(time: Vec<i32>) -> String {
  format!(
    "{:02}:{:02}",
    time[0] * 10 + time[1],
    time[2] * 10 + time[3]
  )
}

fn gen_timestamps(digits: &Vec<i32>, ret: &mut Vec<String>, tmp: &mut Vec<i32>) {
  // println!("{:?}", tmp);
  if tmp.len() == 4 {
    if is_valid_timestamp(tmp) {
      ret.push(from_timestamp2(tmp.clone()));
    }
    return;
  }
  for d in digits {
    if tmp.len() == 0 && *d > 2 || tmp.len() == 2 && *d >= 6 {
      break;
    }
    tmp.push(*d);
    if tmp.len() == 2 && hour(tmp) >= 24 {
      tmp.pop();
      break;
    }
    gen_timestamps(digits, ret, tmp);
    tmp.pop();
  }
}

#[derive(Debug)]
struct TimeSeq {
  timestamps: Vec<String>,
  curr: usize,
}

impl TimeSeq {
  fn new(digits: HashSet<i32>) -> Self {
    let mut digits = Vec::from_iter(digits.into_iter());
    digits.sort();
    let mut ret = vec![];
    gen_timestamps(&digits, &mut ret, &mut vec![]);
    Self {
      timestamps: ret,
      curr: 0,
    }
  }
}

impl Iterator for TimeSeq {
  type Item = String;

  fn next(&mut self) -> Option<Self::Item> {
    if self.curr < self.timestamps.len() {
      let ret = self.timestamps[self.curr].clone();
      self.curr += 1;
      Some(ret)
    } else {
      None
    }
  }

  fn nth(&mut self, n: usize) -> Option<Self::Item> {
    if n < self.timestamps.len() {
      Some(self.timestamps[n].clone())
    } else {
      None
    }
  }
}

impl Solution {
  fn solve(time: &String, digits: HashSet<i32>) -> String {
    let mut iter = TimeSeq::new(digits);
    iter.find(|x| x == time);
    if let Some(ret) = iter.next() {
      ret
    } else {
      iter.nth(0).unwrap()
    }
  }

  pub fn next_closest_time(time: String) -> String {
    let digits = time
      .split("")
      .collect::<Vec<&str>>()
      .into_iter()
      .filter(|&x| x.len() > 0 && x != ":")
      .map(|x| x.parse::<i32>().unwrap())
      .collect::<Vec<i32>>();
    let digits: HashSet<i32> = HashSet::from_iter(digits.into_iter());
    // println!("{:?}", digits);
    Self::solve(&time, digits)
  }
}

#[test]
fn test_from_timestamp() {
  let input = "19:34".to_string();
  let expect = 1174;
  assert_eq!(to_timestamp(&input), expect);
}

#[test]
fn test_to_timestamp() {
  let input = 1174;
  let expect = "19:34".to_string();
  assert_eq!(from_timestamp(input), expect);
}

#[test]
fn test_gen_timestamps() {
  let digits = vec![1];
  let expect = vec_of_strings!["11:11"];
  let mut actual: Vec<String> = vec![];
  gen_timestamps(&digits, &mut actual, &mut vec![]);
  assert_eq!(actual, expect);
  let digits = vec![1, 2];
  let expect = vec_of_strings![
    "11:11", "11:12", "11:21", "11:22", "12:11", "12:12", "12:21", "12:22", "21:11", "21:12",
    "21:21", "21:22", "22:11", "22:12", "22:21", "22:22"
  ];
  let mut actual: Vec<String> = vec![];
  gen_timestamps(&digits, &mut actual, &mut vec![]);
  assert_eq!(actual, expect);
  let digits = vec![9];
  let expect: Vec<String> = vec_of_strings![];
  let mut actual: Vec<String> = vec![];
  gen_timestamps(&digits, &mut actual, &mut vec![]);
  assert_eq!(actual, expect);
  let digits = vec![1, 9];
  let expect: Vec<String> = vec_of_strings!["11:11", "11:19", "19:11", "19:19"];
  let mut actual: Vec<String> = vec![];
  gen_timestamps(&digits, &mut actual, &mut vec![]);
  assert_eq!(actual, expect);
}

#[test]
fn test_time_seq() {
  let digits: HashSet<i32> = HashSet::from_iter(vec![1].into_iter());
  let expect = vec!["11:11".to_string()];
  let actual: Vec<String> = Vec::from_iter(TimeSeq::new(digits));
  assert_eq!(actual, expect);
}

#[test]
fn test() {
  let input = "19:34".to_string();
  let expect = "19:39".to_string();
  let actual = Solution::next_closest_time(input);
  assert_eq!(actual, expect);
  let input = "23:59".to_string();
  let expect = "22:22".to_string();
  let actual = Solution::next_closest_time(input);
  assert_eq!(actual, expect);
}
