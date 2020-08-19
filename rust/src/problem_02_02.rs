use util::ListNode;
use std::collections::VecDeque;

#[derive(Debug)]
struct Solution {}
impl Solution {
  pub fn make_array_from_list(head: Option<Box<ListNode>>) -> Vec<i32> {
    let mut head = head;
    let mut arr: Vec<i32> = Vec::new();
    while let Some(node2) = head {
      arr.push(node2.val);
      head = node2.next;
    }
    arr
  }
  pub fn kth_to_last(head: Option<Box<ListNode>>, k: i32) -> i32 {
    let arr = Self::make_array_from_list(head);
    arr[arr.len() - (k as usize)]
  }
}

#[test]
fn test_kth_to_last() {
  let head = ListNode::make_list_from_array(VecDeque::from(vec![1,2,3,4,6]));
  let k = 2;
  assert_eq!(Solution::kth_to_last(head, k), 4);
}
