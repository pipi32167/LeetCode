#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn remove_outer_parentheses(s: String) -> String {
    let chars: Vec<char> = s.chars().collect();
    let mut ret = String::new();

    let find_end = |chars: &Vec<char>, start: usize| -> Option<usize> {
      let mut cnt = 0;
      chars.iter().skip(start).position(|x| {
        cnt += if *x == '(' { 1 } else { -1 };
        // println!("{} {}", *x, cnt);
        cnt == 0
      })
    };
    let mut start = 0;
    while let Some(end) = find_end(&chars, start) {
      // println!("{}", end);
      ret += &s[start + 1..start + end];
      start = start + end + 1;
    }
    ret
  }
}

#[test]
fn test() {
  let s = "(()())(())".to_owned();
  let expect = "()()()".to_owned();
  assert_eq!(Solution::remove_outer_parentheses(s), expect);
  let s = "(()())(())(()(()))".to_owned();
  let expect = "()()()()(())".to_owned();
  assert_eq!(Solution::remove_outer_parentheses(s), expect);
}
