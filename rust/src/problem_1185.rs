#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn day_of_the_week(day: i32, month: i32, year: i32) -> String {
    let is_leap_year =
      |year| year % 100 == 0 && year % 400 == 0 || year % 100 != 0 && year % 4 == 0;
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
    days += 4; // 1971-01-01 is friday
    let day_of_week = days % 7;
    let day_names_of_week = vec_of_strings![
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    day_names_of_week[day_of_week as usize].clone()
  }
}

#[test]
fn test() {
  assert_eq!(
    Solution::day_of_the_week(31, 8, 2019),
    "Saturday".to_owned()
  );
  assert_eq!(
    Solution::day_of_the_week(18, 7, 1999),
    "Sunday".to_owned()
  );
  assert_eq!(
    Solution::day_of_the_week(15, 8, 1993),
    "Sunday".to_owned()
  );
}
