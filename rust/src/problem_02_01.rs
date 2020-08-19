use util::ListNode;
use std::collections::{VecDeque, HashSet};
use std::iter::FromIterator;


#[derive(Debug)]
struct Solution {
}
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
    pub fn remove_duplicate_nodes(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
      if head.is_none() {
        return None;
      }
      let first = head.clone().unwrap().val;
      let mut ret = vec![first];
      let mut set: HashSet<i32> = HashSet::from_iter(vec![first]);
      let mut node = head.unwrap().next;
      while let Some(node2) = node {
        if !set.contains(&node2.val) {
          ret.push(node2.val);
          set.insert(node2.val);
        }
        node = node2.next;
      }
      Self::make_list_from_array(VecDeque::from(ret))
    }
}


#[test]
fn test_remove_duplicate_nodes() {
  let input = vec![1,2,3,3,2,1];
  let expect = vec![1,2,3];
  let head = ListNode::make_list_from_array(VecDeque::from(input));
  let result = ListNode::make_array_from_list(Solution::remove_duplicate_nodes(head));
  assert_eq!(result, expect);
  let input = vec![1,1,1,1,2];
  let expect = vec![1,2];
  let head = ListNode::make_list_from_array(VecDeque::from(input));
  let result = ListNode::make_array_from_list(Solution::remove_duplicate_nodes(head));
  assert_eq!(result, expect);

}