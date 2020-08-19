
#[derive(Debug)]
struct Solution {
}

impl Solution {
    pub fn one_edit_away(first: String, second: String) -> bool {

      let (long, short) = if first.len() > second.len() {
        (first.as_bytes(), second.as_bytes())
      } else {
        (second.as_bytes(), first.as_bytes())
      };

      if long.len() - short.len() > 1 {
        return false;
      }

      if long.len() == short.len() {
        let mut diff = 0;
        for i in 0..long.len() {
          if long[i] != short[i] {
            diff += 1;
            if diff > 1 {
              return false;
            }
          }
        }
      } else {
        let mut hit = false;
        for i in 0..short.len() {
          let j = if hit { i + 1 } else { i };
          println!("hit:{}, i:{}, j:{}", hit, i, j);
          if long[j] != short[i] {
            if hit {
              return false;
            } else if long[i + 1] != short[i] {
              return false;
            }
            hit = true;
          }
        }
      }
      true
    }
}

#[test]
fn test_one_edit_away() {
  assert!(Solution::one_edit_away("pale".to_string(), "ple".to_string()));
  assert!(Solution::one_edit_away("pale".to_string(), "pal".to_string()));
  assert!(Solution::one_edit_away("pale".to_string(), "pale".to_string()));
  assert!(Solution::one_edit_away("pale".to_string(), "pala".to_string()));
  assert!(!Solution::one_edit_away("pales".to_string(), "pal".to_string()));
  assert!(!Solution::one_edit_away("pele".to_string(), "pal".to_string()));
  assert!(!Solution::one_edit_away("teacher".to_string(), "taches".to_string()));
  assert!(!Solution::one_edit_away("teacher".to_string(), "bleacher".to_string()));
}