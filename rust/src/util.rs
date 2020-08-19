use std::cell::RefCell;
use std::collections::VecDeque;
use std::rc::Rc;

// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
  pub val: i32,
  pub next: Option<Box<ListNode>>,
}

impl ListNode {
  #[inline]
  pub fn new(val: i32) -> Self {
    ListNode { next: None, val }
  }

  pub fn make_list_from_array(mut arr: VecDeque<i32>) -> Option<Box<Self>> {
    if let Some(val) = arr.pop_front() {
      Some(Box::new(ListNode {
        next: Self::make_list_from_array(arr),
        val,
      }))
    } else {
      None
    }
  }

  pub fn make_array_from_list(head: Option<Box<Self>>) -> Vec<i32> {
    
    let mut head = head;
    let mut arr: Vec<i32> = Vec::new();
    while let Some(node2) = head {
      arr.push(node2.val);
      head = node2.next;
    }
    arr
  }
}

// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
  pub val: i32,
  pub left: Option<Rc<RefCell<TreeNode>>>,
  pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
  #[inline]
  pub fn new(val: i32) -> Self {
    TreeNode {
      val,
      left: None,
      right: None,
    }
  }

  pub fn make_tree_from_list(arr: Vec<Option<i32>>) -> Option<Rc<RefCell<Self>>> {
    if arr.len() == 0 {
      return None;
    }

    let mut arr: VecDeque<Option<i32>> = VecDeque::from(arr);
    let root = Rc::new(RefCell::new(Self::new(arr.pop_front().unwrap().unwrap())));
    let mut stack: VecDeque<Rc<RefCell<Self>>> = VecDeque::from(vec![root.clone()]);

    let mut arr: VecDeque<Option<Rc<RefCell<Self>>>> = arr.into_iter().map(|e| {
      if let Some(e) = e {
        Some(Rc::new(RefCell::new(Self::new(e))))
      } else {
        None
      }
    }).collect();

    while stack.len() > 0 {
      let node = stack.pop_front().unwrap();
      if let Some(Some(left_node)) = arr.pop_front() {
        stack.push_back(left_node.clone());
        node.borrow_mut().left = Some(left_node);
      } else {
        node.borrow_mut().left = None;
      }
      if let Some(Some(right_node)) = arr.pop_front() {
        stack.push_back(right_node.clone());
        node.borrow_mut().right = Some(right_node);
      } else {
        node.borrow_mut().right = None;
      }
    }
    
    // println!("make_tree_from_list: {:?}", root);
    Some(root)
  }

  fn make_list_from_tree_impl(tree: Option<Rc<RefCell<Self>>>, ret: &mut Vec<Option<i32>>) {
    if tree.is_none() {
      ret.push(None);
      return;
    }

    let mut stack: VecDeque<Option<Rc<RefCell<Self>>>> = VecDeque::from(vec![tree]);
    while stack.len() > 0 {
      let node = stack.pop_front().unwrap();
      if let Some(node) = node {
        ret.push(Some(node.borrow().val));
        stack.push_back(node.borrow().left.clone());
        stack.push_back(node.borrow().right.clone());
      } else {
        ret.push(None);
      }
    }
  }

  pub fn make_list_from_tree(tree: Option<Rc<RefCell<Self>>>) -> Vec<Option<i32>> {
    let mut ret: Vec<Option<i32>> = vec![];
    Self::make_list_from_tree_impl(tree, &mut ret);
    loop {
      // println!("make_list_from_tree: {:?}", ret);
      let elem = ret.last();
      if elem.is_none() {
        break;
      }
      // println!("{:?}", elem);
      let elem = elem.unwrap();
      // println!("{:?}", elem);
      if elem.is_none() {
        ret.pop();
      } else {
        break;
      }
    }
    ret
  }
}

mod util {

  pub fn fibonacci(n: u32) -> u32 {
    if n <= 1 {
      1
    } else {
      fibonacci(n - 1) + fibonacci(n - 2)
    }
  }
}

#[cfg(test)]
mod tests {
  use super::util::*;

  #[test]
  fn test_fibonacci() {
    assert_eq!(fibonacci(0), 1);
    assert_eq!(fibonacci(1), 1);
    assert_eq!(fibonacci(2), 2);
    assert_eq!(fibonacci(3), 3);
    assert_eq!(fibonacci(4), 5);
  }
}

macro_rules! vec_of_strings {
  ($($x:expr),*) => (vec![$($x.to_string()),*]);
}

macro_rules! vec_of_vec {
  ($($x:expr),*) => (vec![$($x.to_vec()),*]);
}

macro_rules! vec_of_opt {
  ($($x:expr),*) => (vec![$(Some($x)),*]);
}

#[test]
fn test_make_tree_from_array() {
  let arr = vec![Some(3), Some(9), Some(20), None, None, Some(15), Some(7)];
  let ret = TreeNode::make_list_from_tree(TreeNode::make_tree_from_list(arr.clone()));
  assert_eq!(arr, ret);
}

pub fn split(s: &str) -> Vec<String> {
  s
    .split("")
    .map(|x| x.to_string())
    .collect::<Vec<String>>()
    .into_iter()
    .filter(|x| x.len() > 0)
    .collect::<Vec<String>>()
}

macro_rules! max {
  ($x:expr) => ( $x );
  ($x:expr, $($xs:expr),+) => {
      {
          use std::cmp::max;
          max($x, max!( $($xs),+ ))
      }
  };
}

macro_rules! min {
  ($x:expr) => ( $x );
  ($x:expr, $($xs:expr),+) => {
      {
          use std::cmp::min;
          min($x, min!( $($xs),+ ))
      }
  };
}


#[test]
fn test_max_min() {
  let ret = max!(1,2,3,4,5);
  assert_eq!(ret, 5);
  let ret = min!(1,2,3,4,5);
  assert_eq!(ret, 1);
}