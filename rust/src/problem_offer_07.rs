

use std::cell::RefCell;
use std::rc::Rc;
use util::TreeNode;

struct Solution {}
impl Solution {
  fn solve ( preorder: &Vec<i32>, i: &mut i32, inorder: &Vec<i32>, j: i32, k: i32 ) -> Option<Rc<RefCell<TreeNode>>> {
    if *i as usize >= preorder.len() || j > k {
      return None;
    }

    let val = preorder[*i as usize];
    *i += 1;
    if let Some(idx) = inorder.iter().position(|&e| e == val) {
      let mut node = TreeNode::new(val);
      node.left = Self::solve(&preorder, i, &inorder, j, idx as i32 - 1);
      node.right = Self::solve(&preorder, i, &inorder, idx as i32 + 1, k);
      Some(Rc::new(RefCell::new(node)))
    } else {
      None
    }
  }

  pub fn build_tree(preorder: Vec<i32>, inorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    let mut i = 0;
    let len = inorder.len() as i32;
    Self::solve(&preorder, &mut i, &inorder, 0, len - 1)
  }
}

#[test]
fn test_build_tree() {
  
  let preorder = vec![3,9,20,15,7];
  let inorder = vec![9,3,15,20,7];
  let ret = vec![Some(3), Some(9), Some(20), None, None, Some(15), Some(7)];
  assert_eq!(TreeNode::make_list_from_tree(Solution::build_tree(preorder, inorder)), ret);
  
}
