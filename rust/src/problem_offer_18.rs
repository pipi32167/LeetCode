use util::ListNode;
use std::collections::VecDeque;

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

  pub fn delete_node(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {

    let mut node = head;
    let mut arr: VecDeque<i32> = VecDeque::new();
    loop {
      if let Some(node2) = node {
        let val2 = node2.val;
        if val2 != val {
          arr.push_back(val2);
        }
        node = node2.next;
      } else {
        break;
      }
    }

    Self::make_list_from_array(arr)
  }
}