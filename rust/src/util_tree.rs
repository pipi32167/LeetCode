// // use std::cmp::*;
// use std::rc::Rc;

// #[derive(Debug, PartialEq, Clone)]
// struct TreeNode {
//   val: u32,
//   left: Rc<Option<TreeNode>>,
//   right: Rc<Option<TreeNode>>,
// }

// impl TreeNode {
//   fn new(val: u32) -> Rc<Option<TreeNode>> {
//     Rc::new(Some(TreeNode {
//       val: val,
//       left: Rc::new(None),
//       right: Rc::new(None),
//     }))
//   }
// }

// fn insert(mut tree: Rc<Option<TreeNode>>, val: u32) -> Rc<Option<TreeNode>> {
//   match *tree {
//     Some(ref mut node) => {
//       if node.val > val {
//         node.left = insert(node.left.clone(), val)
//       } else {
//         node.right = insert(node.right.clone(), val)
//       }
//       tree
//     }
//     None => TreeNode::new(val),
//   }
// }

// #[test]
// fn test_new() {
//   if let Some(ref tree) = *TreeNode::new(1) {
//     assert_eq!(tree.val, 1);
//     assert_eq!(*tree.left, None);
//     assert_eq!(*tree.right, None);
//   } else {
//     assert!(false);
//   }
// }

// #[test]
// fn test_insert() {
//   let tree = TreeNode::new(2);
//   let tree = insert(tree, 1);
//   // tree = insert(tree, 3);
// }
