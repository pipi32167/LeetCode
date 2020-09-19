#[derive(Debug)]
struct Solution {}

pub fn day_from_1971(date: String) -> i32 {
  let date: Vec<usize> = date
    .split('-')
    .map(|x| usize::from_str_radix(x, 10).ok().unwrap())
    .collect();
  let (year, month, day) = (date[0], date[1], date[2]);
  let is_leap_year = |year| year % 100 == 0 && year % 400 == 0 || year % 100 != 0 && year % 4 == 0;
  let days_of_feb = if is_leap_year(year) { 29 } else { 28 };
  let days_of_month = [31, days_of_feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day_of_year = day as i32
    + (0..month - 1)
      .map(|i| days_of_month[i as usize])
      .sum::<i32>();

  let mut days = 0;
  for i in 1971..year {
    days += if is_leap_year(i) { 366 } else { 365 };
  }

  days += day_of_year;
  days += 4;
  days
}

impl Solution {
  pub fn days_between_dates(date1: String, date2: String) -> i32 {
    (day_from_1971(date1) - day_from_1971(date2)).abs()
  }
}

#[test]
fn test() {
    
  assert_eq!(Solution::days_between_dates("2019-06-29".to_owned(), "2019-06-30".to_owned()), 1);
  assert_eq!(Solution::days_between_dates("2020-01-15".to_owned(), "2019-12-31".to_owned()), 15);

}