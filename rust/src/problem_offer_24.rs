use util::ListNode;
use std::collections::VecDeque;

#[derive(Debug)]
struct Solution {}

impl Solution {
  
    pub fn make_list_from_array(mut arr: VecDeque<i32>) -> Option<Box<ListNode>> {
      if let Some(val) = arr.pop_front() {
        Some(Box::new(ListNode {
          next: Self::make_list_from_array(arr),
          val,
        }))
      } else {
        None
      }
    }

    pub fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {

      let mut head = head;
      let mut arr: Vec<i32> = Vec::new();
      while let Some(node2) = head {
        arr.push(node2.val);
        head = node2.next;
      }
      arr.reverse();
      Self::make_list_from_array(VecDeque::from(arr))
    }
}

#[test]
fn test_reverse_list() {
  
  let input = ListNode::make_list_from_array(VecDeque::from(vec![1,2,3,4,5]));
  let expect = vec![5,4,3,2,1];
  let result = ListNode::make_array_from_list(Solution::reverse_list(input));
  assert_eq!(result, expect);
}