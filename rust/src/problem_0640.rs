use std::i32;
use std::iter::FromIterator;

#[derive(Debug)]
struct Solution {}

impl Solution {

  pub fn solve_equation(equation: String) -> String {
    let parse = || -> Vec<String> {
      let mut ret = vec![];
      let mut chars = vec![];
      let mut is_met_eq = false;
      for c in equation.chars() {
        if c == '=' {
          is_met_eq = true;
          if chars.len() > 0 {
            ret.push(String::from_iter(chars.clone()));
          }
          ret.push(String::from("-"));
          chars.clear();
          continue;
        }
        if "+-".contains(c) {
          if chars.len() > 0 {
            ret.push(String::from_iter(chars.clone()));
          }
          if !is_met_eq {
            ret.push(c.to_string());
          } else {
            let t = if c == '+' { "-" } else { "+" };
            ret.push(String::from(t));
          }
          chars.clear();
          continue;
        }
        chars.push(c);
      }
      ret.push(String::from_iter(chars));
      ret
    };
    let tokens = parse();
    // println!("{:?}", tokens);
    let get_coef_of_x = |x: String| -> i32 {  
      let ret = x.trim_end_matches('x');
      if ret.len() ==  0 {
        return 1;
      }
      i32::from_str_radix(ret, 10).ok().unwrap()
    };
    let mut x = 0;
    let mut y = 0;
    let mut positive = true;
    for token in tokens {
      if token == "+" || token == "-" {
        positive = if token == "+" { true } else { false };
        continue;
      }
      let is_x = token.contains("x");
      let target = if is_x { &mut x } else { &mut y };
      let r = if is_x {
        get_coef_of_x(token)
      } else {
        i32::from_str_radix(&token, 10).ok().unwrap()
      };
      *target += if positive { r } else { -r };
    }

    if x == 0 {
      if y == 0 {
        return "Infinite solutions".to_owned();
      } else {
        return "No solution".to_owned();
      }
    }
    format!("x={}", -y / x)
  }
}

#[test]
fn test() {

  let equation = "-x=-1".to_owned();
  assert_eq!(Solution::solve_equation(equation), "x=1");

  let equation = "x+5-3+x=6+x-2".to_owned();
  assert_eq!(Solution::solve_equation(equation), "x=2");

  let equation = "2x=x".to_owned();
  assert_eq!(Solution::solve_equation(equation), "x=0");

  let equation = "x=x".to_owned();
  assert_eq!(Solution::solve_equation(equation), "Infinite solutions");

  let equation = "2x+3x-6x=x+2".to_owned();
  assert_eq!(Solution::solve_equation(equation), "x=-1");

  let equation = "x=x+2".to_owned();
  assert_eq!(Solution::solve_equation(equation), "No solution");
  
}
