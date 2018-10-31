// // use std::collections::LinkedList;
// // #[derive(Debug)]
// // struct LinkedListNode {
// //   val: u32,
// //   next: Box<LinkedListNode>,
// // }

// // #[derive(Debug)]
// // enum LinkedList {
// //   Node(Box<LinkedListNode>),
// //   Nil,
// // }

// // impl LinkedList {
// //   pub fn new() -> LinkedList {
// //     LinkedList::Nil
// //   }

// //   pub fn prepend(elem: u32) -> LinkedList {
// //     Box<>
// //   }

// //   pub fn append(self, elem: u32) -> Self {

// //   }

// //   // fn get(n: usize) -> Option<u32> {

// //   // }
// // }

// macro_rules! list {
//   ($($elem: expr), *) => {{
//     let mut list: LinkedList<u32> = LinkedList::new();
//     $( list.push_back($elem); )*
//     list
//   }}
// }

// #[test]
// fn test_original_linked_list() {
//   let mut list1: LinkedList<u32> = LinkedList::new();
//   list1.push_back(1);
//   list1.push_back(2);
//   list1.push_front(3);
//   assert_eq!(list1.len(), 3);
//   assert_eq!(*list1.front().unwrap(), 3);
//   assert_eq!(*list1.back().unwrap(), 2);
// }

// #[test]
// fn test_list_macro() {
//   let list: LinkedList<u32> = list![1u32,2,3,4,5];
//   assert_eq!(list.len(), 5);
//   assert_eq!(*list.front().unwrap(), 1);
//   assert_eq!(*list.back().unwrap(), 5);
//   // println!("{:?}", list)
// }