use util::ListNode;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn get_decimal_value(mut head: Option<Box<ListNode>>) -> i32 {
    let mut ret = 0;
    while head.is_some() {
      ret <<= 1;
      ret += head.as_ref().map(|x| x.val).unwrap();
      head = head.unwrap().next;
    }
    ret
  }
}