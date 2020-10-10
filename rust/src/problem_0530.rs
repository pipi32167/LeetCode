use std::cell::RefCell;
use std::i32;
use std::rc::Rc;
use util::TreeNode;

#[derive(Debug)]
struct Solution {}

impl Solution {
  fn dfs(root: &Option<Rc<RefCell<TreeNode>>>, ret: &mut Vec<i32>) {
    if root.is_none() {
      return;
    }

    let root = root.as_ref().unwrap().borrow();
    ret.push(root.val);
    Self::dfs(&root.left, ret);
    Self::dfs(&root.right, ret);
  }
  pub fn get_minimum_difference(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    let mut nums = vec![];
    Self::dfs(&root, &mut nums);
    nums.sort();
    let mut min = i32::MAX;
    for i in 1..nums.len() {
      min = min.min(nums[i] - nums[i - 1]);
    }
    min
  }
}
