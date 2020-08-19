mod problem_offer_28 {
  use std::cell::RefCell;
  use std::collections::VecDeque;
  use std::rc::Rc;

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
  }

  type TreeNodePtr = Rc<RefCell<TreeNode>>;

  fn make_tree(mut vals: VecDeque<Option<i32>>) -> Option<TreeNodePtr> {
    if vals.len() == 0 {
      return None;
    }

    let mut deque: VecDeque<Option<TreeNodePtr>> = VecDeque::new();
    let val  = vals.pop_front().unwrap();
    let root = match val {
      Some(v) => Option::from(Rc::from(RefCell::from(TreeNode::new(v)))),
      None => None,
    };
    deque.push_back(root);

    while deque.len() > 0 {
      let node = deque.pop_front().unwrap();
      if node.is_none() {
          continue;
      }
      let mut node = node.unwrap();
      let left_val = vals.pop_front().unwrap();
      match left_val {
          Some(val) => {
            let left_node = TreeNode::new(val);
            *node.left = Option::from(Rc::from(RefCell::from(left_node)));
          },
          None => node.left = None,
      }
      let right_val = vals.pop_front().unwrap();
      match right_val {
          Some(val) => {
            let right_node = TreeNode::new(val);
            node.right = Option::from(Rc::from(RefCell::from(right_node)));
          },
          None => node.right = None,
      }
    }

    root
  }

  pub fn is_symmetric(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    false
  }
}

#[test]
fn test_is_symmetric() {}
