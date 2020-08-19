use util::TreeNode;
use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug)]
struct Solution {}

impl Solution {

    fn is_match(a: &Option<Rc<RefCell<TreeNode>>>, b: &Option<Rc<RefCell<TreeNode>>>) -> bool {
      if b.is_none() {
        return true;
      }

      if a.is_none() {
        return false;
      }

      let a = a.as_ref().unwrap().borrow();
      let b = b.as_ref().unwrap().borrow();

      if a.val != b.val {
        return false
      }

      Self::is_match(&a.left, &b.left) && 
      Self::is_match(&a.right, &b.right)
    }

    pub fn is_sub_structure_impl(a: &Option<Rc<RefCell<TreeNode>>>, b: &Option<Rc<RefCell<TreeNode>>>) -> bool {
      if a.is_none() || b.is_none() {
        return false;
      }

      Self::is_match(&a, &b) || 
      Self::is_sub_structure_impl(&a.as_ref().unwrap().borrow().left, b) || 
      Self::is_sub_structure_impl(&a.as_ref().unwrap().borrow().right, b)
    }

    pub fn is_sub_structure(a: Option<Rc<RefCell<TreeNode>>>, b: Option<Rc<RefCell<TreeNode>>>) -> bool {
      
      Self::is_sub_structure_impl(&a, &b)
    }
}

#[test]
fn test_is_sub_structure() {
    unimplemented!();
}