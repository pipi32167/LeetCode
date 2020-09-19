use std::usize;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn day_of_year(date: String) -> i32 {
    let date: Vec<usize> = date
      .split('-')
      .map(|x| usize::from_str_radix(x, 10).ok().unwrap())
      .collect();
    let (year, month, day) = (date[0], date[1], date[2]);
    let is_leap_year = year % 100 == 0 && year % 400 == 0 
                    || year % 100 != 0 && year % 4 == 0;
    let days_of_feb = if is_leap_year { 29 } else { 28 };
    let days_of_month = [31, days_of_feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    day as i32 + (0..month - 1).map(|i| days_of_month[i]).sum::<i32>()
  }
}

#[test]
fn test() {
  let date = "2019-01-09".to_string();
  assert_eq!(Solution::day_of_year(date), 9);
  let date = "2019-02-10".to_string();
  assert_eq!(Solution::day_of_year(date), 41);
  let date = "2003-03-01".to_string();
  assert_eq!(Solution::day_of_year(date), 60);
  let date = "2004-03-01".to_string();
  assert_eq!(Solution::day_of_year(date), 61);
  let date = "1900-03-25".to_string();
  assert_eq!(Solution::day_of_year(date), 84);
}
