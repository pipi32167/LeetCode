
mod problem_offer_22 {
  use std::collections::VecDeque;
  // Definition for singly-linked list.
  #[derive(PartialEq, Eq, Clone, Debug)]
  pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>
  }
  
  impl ListNode {
    #[inline]
    pub fn new(val: i32) -> Self {
      ListNode {
        next: None,
        val
      }
    }
    
    pub fn make_list_from_array(mut arr: VecDeque<i32>) -> Option<Box<Self>> {
      if let Some(val) = arr.pop_front() {
        Some(Box::new(ListNode {
          next: Self::make_list_from_array(arr),
          val
        }))
      } else {
        None
      }
    }
  }  

  fn length(head: &Option<Box<ListNode>>) -> usize {
    if let Some(node) = head {
      length(&node.next) + 1
    } else {
      0
    }
  }

  fn get_kth(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
    if k == 1 {
      head
    } else {
      match head {
          Some(node) => get_kth(node.next, k - 1),
          None => None,
      }
    }
  }

  pub fn get_kth_from_end(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
    let len = length(&head) as i32;
    get_kth(head, len - k + 1)
  }
}

#[test]
fn test_get_kth_from_end() {
  use std::collections::VecDeque;
  
  let head = problem_offer_22::ListNode::make_list_from_array(VecDeque::from(vec![1,2,3,4,5]));
  println!("{:?}", head);
  let ret = problem_offer_22::get_kth_from_end(head, 2);
  assert_ne!(ret, None);
  assert_eq!(ret.unwrap().val, 4);
}