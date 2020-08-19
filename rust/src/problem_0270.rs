// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }

use util::TreeNode;
use std::rc::Rc;
use std::cell::RefCell;
use std::f64;

#[derive(Debug)]
struct Solution {
}

impl Solution {

    fn solve(root: &Option<Rc<RefCell<TreeNode>>>, target: &f64, min: &mut f64, ret: &mut i32) {
      
      if let Some(root) = root {
        let val = root.borrow().val;
        let diff = (val as f64 - target).abs();
        if *min > diff {
          *min = diff;
          *ret = val;
          // println!("min:{}, ret:{}", min, ret);
        }
        Self::solve(&root.borrow().left, target, min, ret);
        Self::solve(&root.borrow().right, target, min, ret);
      } 
    }

    pub fn closest_value(root: Option<Rc<RefCell<TreeNode>>>, target: f64) -> i32 {

      let mut ret = 0;
      let mut min = f64::MAX;
      Self::solve(&root, &target, &mut min, &mut ret);
      ret
    }
}

#[test]
fn test() {

  let root = TreeNode::make_tree_from_list(vec_of_opt![4,2,5,1,3]);
  let target = 3.714286;
  let expect = 4;
  let actual = Solution::closest_value(root, target);
  assert_eq!(actual, expect);

}