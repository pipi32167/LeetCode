use std::collections::VecDeque;
use util::ListNode;

struct Solution {}

impl Solution {
  fn solve(head: Option<Box<ListNode>>) -> Vec<i32> {
    
    match head {
      Some(head) => {
        let mut ret = Self::solve(head.next);
        ret.push(head.val);
        ret
      },
      None => vec![],
    }
  }
  pub fn reverse_print(head: Option<Box<ListNode>>) -> Vec<i32> {
    Self::solve(head)
  }
}

#[test]
fn test_reverse_print() {
  let input = None;
  let output: Vec<i32> = vec![];
  assert_eq!(Solution::reverse_print(input), output);

  let input = VecDeque::from(vec![1,3,2]);
  let input = ListNode::make_list_from_array(input);
  let output: Vec<i32> = vec![2,3,1];
  assert_eq!(Solution::reverse_print(input), output);
}
