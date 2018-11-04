// // use std::cmp::*;

// #[derive(Debug, PartialEq)]
// struct TreeNode {
//   val: u32,
//   left: Option<Box<TreeNode>>,
//   right: Option<Box<TreeNode>>,
// }

// impl TreeNode {
//   fn new(val: u32) -> Box<TreeNode> {
//     Box::new(TreeNode {
//       val: val,
//       left: None,
//       right: None,
//     })
//   }
// }

// fn insert(tree: Option<Box<TreeNode>>, val: u32) -> Option<Box<TreeNode>> {
//   if let Some(mut root) = tree {
//     if root.val < val {
//       root.right = insert(root.right, val)
//     } else {
//       root.left = insert(root.right, val)
//     }
//     Some(root)
//   } else {
//     Some(TreeNode::new(val))
//   }
// }

// #[test]
// fn test_new() {
//   let tree = TreeNode::new(1);
//   assert_eq!(tree.val, 1);
//   assert_eq!(tree.left, None);
//   assert_eq!(tree.right, None);
// }
