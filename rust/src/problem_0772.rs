use util::split;

#[derive(Debug)]
struct Solution {}

impl Solution {
  fn find_close(tokens: &Vec<String>, start: usize, end: usize) -> Option<usize> {
    let mut cnt = 0;
    for i in start..=end {
      if tokens[i] == "(" {
        cnt += 1;
      } else if tokens[i] == ")" {
        cnt -= 1;
        if cnt == 0 {
          return Some(i);
        }
      }
    }
    None
  }
  fn solve_parentheses(tokens: &Vec<String>, start: usize, end: usize) -> Vec<String> {
    // println!("solve_parentheses: {}, {}", start, end);
    let mut ret: Vec<String> = vec![];
    if start > end {
      return ret;
    }
    let mut i = start;
    while i <= end {
      // println!("i: {}", i);
      let token = &tokens[i];
      if "(" == token {
        // println!("{:?}, {:?}", i, Self::find_close(&tokens, i, end));
        if let Some(j) = Self::find_close(&tokens, i, end) {
          ret.extend(Self::solve_parentheses(&tokens, i + 1, j - 1));
          i = j + 1;
        } else {
          println!("error 1!");
          break;
        }
      } else {
        ret.push(token.clone());
        i += 1;
      }
    }
    let ret = Self::solve_mul_div(&ret, 0, ret.len() - 1);
    let ret = Self::solve_add_sub(&ret, 0, ret.len() - 1);
    ret
  }

  fn solve_mul_div(tokens: &Vec<String>, start: usize, end: usize) -> Vec<String> {
    let mut ret: Vec<String> = vec![];
    let mut i = start;
    while i <= end {
      let token = &tokens[i];
      if token == "*" || token == "/" {
        let lvalue: i64 = ret.pop().unwrap().parse().unwrap();
        i += 1;
        let rvalue: i64 = tokens[i].parse().unwrap();
        if token == "*" {
          ret.push((lvalue * rvalue).to_string());
        } else {
          ret.push((lvalue / rvalue).to_string());
        }
      } else {
        ret.push(token.clone());
      }
      i += 1;
    }
    ret
  }

  fn solve_add_sub(tokens: &Vec<String>, start: usize, end: usize) -> Vec<String> {
    let mut ret: Vec<String> = vec![];
    let mut i = start;
    while i <= end {
      let token = &tokens[i];
      if token == "+" || token == "-" {
        let lvalue: i64 = ret.pop().unwrap().parse().unwrap();
        i += 1;
        let rvalue: i64 = tokens[i].parse().unwrap();
        if token == "+" {
          ret.push((lvalue + rvalue).to_string());
        } else {
          ret.push((lvalue - rvalue).to_string());
        }
      } else {
        ret.push(token.clone());
      }
      i += 1;
    }
    ret
  }

  fn solve(tokens: Vec<String>) -> Vec<String> {
    Self::solve_parentheses(&tokens, 0, tokens.len() - 1)
  }

  fn split(s: &String) -> Vec<String> {
    let mut ret = vec![];
    let mut token = String::new();
    for c in s.chars() {
      if c == ' ' {
        if token.len() > 0 {
          ret.push(token);
          token = String::new();
        }
      } else if "+-*/()".contains(c) {
        if token.len() > 0 {
          ret.push(token);
          token = String::new();
        }
        ret.push(c.to_string());
      } else {
        token.push(c);
      }
    }
    if token.len() > 0 {
      ret.push(token);
    }
    ret
  }

  pub fn calculate(s: String) -> i32 {
    let tokens = Self::split(&s);
    let ret = Self::solve(tokens);
    ret[0].parse().unwrap()
  }
}

#[test]
fn test_split() {
  let actual = Solution::split(&"1 + 1".to_string());
  let expect = vec_of_strings!["1", "+", "1"];
  assert_eq!(actual, expect);
  let actual = Solution::split(&" 6-4 / 2 ".to_string());
  let expect = vec_of_strings!["6", "-", "4", "/", "2"];
  assert_eq!(actual, expect);
  let actual = Solution::split(&"2*(5+5*2)/3+(6/2+8)".to_string());
  let expect = vec_of_strings![
    "2", "*", "(", "5", "+", "5", "*", "2", ")", "/", "3", "+", "(", "6", "/", "2", "+", "8", ")"
  ];
  assert_eq!(actual, expect);
  let actual = Solution::split(&"(2+6* 3+5- (3*14/7+2)*5)+3".to_string());
  let expect = vec_of_strings![
    "(", "2", "+", "6", "*", "3", "+", "5", "-", "(", "3", "*", "14", "/", "7", "+", "2", ")", "*",
    "5", ")", "+", "3"
  ];
  assert_eq!(actual, expect);
}

#[test]
fn test_find_close() {
  let tokens = vec_of_strings!["(", "1", "+", "2", ")"];
  let expect = Some(tokens.len() - 1);
  let actual = Solution::find_close(&tokens, 0, tokens.len() - 1);
  assert_eq!(actual, expect);
  let tokens = vec_of_strings!["(", "1", "-", "(", "2", "+", "2", ")", ")"];
  let expect = Some(tokens.len() - 1);
  let actual = Solution::find_close(&tokens, 0, tokens.len() - 1);
  assert_eq!(actual, expect);
  let tokens = vec_of_strings!["(", "1", "-", "(", "2", "+", "2", ")", ")"];
  let expect = Some(tokens.len() - 2);
  let actual = Solution::find_close(&tokens, 3, tokens.len() - 2);
  assert_eq!(actual, expect);
  let tokens = vec_of_strings!["1", "+", "2"];
  let expect = None;
  let actual = Solution::find_close(&tokens, 0, tokens.len() - 1);
  assert_eq!(actual, expect);
}


#[test]
fn test_solve_mul_div() {
  let tokens = split("1*2");
  let expect = vec_of_strings!["2"];
  let actual = Solution::solve_mul_div(&tokens, 0, tokens.len() - 1);
  assert_eq!(actual, expect);
  let tokens = split("1*2*3/2");
  let expect = vec_of_strings!["3"];
  let actual = Solution::solve_mul_div(&tokens, 0, tokens.len() - 1);
  assert_eq!(actual, expect);
  let tokens = split("1+1*2*3/2");
  let expect = vec_of_strings!["1", "+", "3"];
  let actual = Solution::solve_mul_div(&tokens, 0, tokens.len() - 1);
  assert_eq!(actual, expect);
}

#[test]
fn test_solve_add_sub() {
  let tokens = split("1+2");
  let expect = vec_of_strings!["3"];
  let actual = Solution::solve_add_sub(&tokens, 0, tokens.len() - 1);
  assert_eq!(actual, expect);
  let tokens = split("1-2");
  let expect = vec_of_strings!["-1"];
  let actual = Solution::solve_add_sub(&tokens, 0, tokens.len() - 1);
  assert_eq!(actual, expect);
  let tokens = split("1+1-1+1-1");
  let expect = vec_of_strings!["1"];
  let actual = Solution::solve_add_sub(&tokens, 0, tokens.len() - 1);
  assert_eq!(actual, expect);
}

#[test]
fn test_solve_parentheses() {
  let tokens = split("(1+3)");
  let expect = vec_of_strings!["4"];
  let actual = Solution::solve_parentheses(&tokens, 0, tokens.len() - 1);
  assert_eq!(actual, expect);
  let tokens = split("2*(5+5*2)/3+(6/2+8)");
  let expect = vec_of_strings!["21"];
  let actual = Solution::solve_parentheses(&tokens, 0, tokens.len() - 1);
  assert_eq!(actual, expect);
}

#[test]
fn test_calculate() {
  let s = "1 + 1".to_string();
  let expect = 2;
  let actual = Solution::calculate(s);
  assert_eq!(actual, expect);
  let s = " 6-4 / 2 ".to_string();
  let expect = 4;
  let actual = Solution::calculate(s);
  assert_eq!(actual, expect);
  let s = "2*(5+5*2)/3+(6/2+8)".to_string();
  let expect = 21;
  let actual = Solution::calculate(s);
  assert_eq!(actual, expect);
  let s = "(2+6* 3+5- (3*14/7+2)*5)+3".to_string();
  let expect = -12;
  let actual = Solution::calculate(s);
  assert_eq!(actual, expect);
  let s = "0-2147483648".to_string();
  let expect = -2147483648;
  let actual = Solution::calculate(s);
  assert_eq!(actual, expect);
}
