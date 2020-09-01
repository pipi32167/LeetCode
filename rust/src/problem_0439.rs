#[derive(Debug)]
struct Solution {}


impl Solution {

  fn find_question(tokens: &Vec<char>, l: usize, u: usize) -> usize {
      
    for i in l..=u {
      if tokens[i] == '?' {
        return i;
      }
    }

    panic!("cannot find question: {:?}", tokens.get(l..=u));
  }
  fn find_colon(tokens: &Vec<char>, l: usize, u: usize) -> usize {
      
    let mut q_cnt = 0;
    for i in l..=u {
      if tokens[i] == '?' {
        q_cnt += 1;
      } else if tokens[i] == ':' {
        q_cnt -= 1;
        if q_cnt == 0 {
          return i;
        }
      }
    }

    panic!("cannot find colon: {:?}", tokens.get(l..=u));
  }

  fn solve(tokens: &Vec<char>, l: usize, u: usize) -> char {

    // println!("tokens: {:?}", tokens.get(l..=u));

    if l == u {
      return tokens[l];
    }
    
    let q_idx = Self::find_question(tokens, l, u);
    let c_idx = Self::find_colon(tokens, q_idx, u);
    let expr = Self::solve(tokens, l, q_idx - 1);
    if expr == 'T' { 
      Self::solve(tokens, q_idx + 1, c_idx - 1)
    } else { 
      Self::solve(tokens, c_idx + 1, u)
    }
  }

  pub fn parse_ternary(expr: String) -> String {
    let tokens: Vec<char> = expr.chars().filter(|x| *x != ' ').collect();
    if tokens.len() == 1 {
      return tokens[0].to_string();
    }

    Self::solve(&tokens, 0, tokens.len() - 1).to_string()
  }
}

#[test]
fn test() {
  let expr = "T?2:3".to_owned();
  assert_eq!(Solution::parse_ternary(expr), "2");
  let expr = "F?1:T?4:5".to_owned();
  assert_eq!(Solution::parse_ternary(expr), "4");
  let expr = "T?T?F:5:3".to_owned();
  assert_eq!(Solution::parse_ternary(expr), "F");
  let expr = "T".to_owned();
  assert_eq!(Solution::parse_ternary(expr), "T");
}