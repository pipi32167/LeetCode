use std::cell::RefCell;
use std::rc::Rc;
use util::TreeNode;

#[derive(Debug)]
struct Solution {}

impl Solution {
  fn find_start(s: &String, start: usize, end: usize) -> Option<usize> {
    let bytes = s.as_bytes();
    for i in start..=end {
      if bytes[i] == b'(' {
        return Some(i);
      }
    }
    None
  }

  fn find_end(s: &String, start: usize, end: usize) -> Option<usize> {
    let bytes = s.as_bytes();
    let mut cnt = 0;
    for i in start..=end {
      if bytes[i] == b'(' {
        cnt += 1;
      } else if bytes[i] == b')' {
        cnt -= 1;
        if cnt == 0 {
          return Some(i);
        }
      }
    }
    None
  }

  fn solve(s: &String, start: usize, end: usize) -> Option<Rc<RefCell<TreeNode>>> {
    if start > end {
      return None;
    }

    let mut i = start;
    let bytes = s.as_bytes();
    while i < bytes.len() && bytes[i] != b'(' && bytes[i] != b')' {
      i += 1;
    }
    let val = s[start..i].parse().unwrap();
    let node = Rc::new(RefCell::new(TreeNode::new(val)));
    let left_start = Self::find_start(s, i, end);
    if left_start.is_none() {
      return Some(node);
    }
    let left_start = left_start.unwrap();
    let left_end = Self::find_end(s, left_start, end).unwrap();
    node.borrow_mut().left = Self::solve(s, left_start + 1, left_end - 1);

    let right_start = Self::find_start(s, left_end + 1, end);
    if right_start.is_none() {
      return Some(node);
    }
    let right_start = right_start.unwrap();
    let right_end = Self::find_end(s, right_start, end).unwrap();
    node.borrow_mut().right = Self::solve(s, right_start + 1, right_end - 1);
    Some(node)
  }

  pub fn str2tree(s: String) -> Option<Rc<RefCell<TreeNode>>> {
    if s.len() > 0 {
      Self::solve(&s, 0, s.len() - 1)
    } else {
      None
    }
  }
}

#[test]
fn test() {
  let s = "4(2(3)(1))(6(5))".to_string();
  let expect =
    TreeNode::make_tree_from_list(vec![Some(4), Some(2), Some(6), Some(3), Some(1), Some(5)]);
  let actual = Solution::str2tree(s);
  assert_eq!(actual, expect);
  let s = "2(3)(1)".to_string();
  let expect = TreeNode::make_tree_from_list(vec![Some(2), Some(3), Some(1)]);
  let actual = Solution::str2tree(s);
  assert_eq!(actual, expect);
  let s = "2(3)".to_string();
  let expect = TreeNode::make_tree_from_list(vec![Some(2), Some(3)]);
  let actual = Solution::str2tree(s);
  assert_eq!(actual, expect);
  let s = "4".to_string();
  let expect = TreeNode::make_tree_from_list(vec![Some(4)]);
  let actual = Solution::str2tree(s);
  assert_eq!(actual, expect);
  let s = "".to_string();
  let expect = TreeNode::make_tree_from_list(vec![]);
  let actual = Solution::str2tree(s);
  assert_eq!(actual, expect);
}
