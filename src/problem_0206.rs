// enum List {
//   Cons(u32, Box<List>),
//   Nil,
// }

// // TODO
// // macro_rules! list {
// //   () => {

// //   };
// // }

// impl List {
//   fn new() -> List {
//     List::Nil
//   }

//   fn prepend(self, elem: u32) -> List {
//     List::Cons(elem, Box::new(self))
//   }

//   fn append(&self, elem: u32) {
//     if let List::Cons(head, tail) = *self {
//       match *tail {
//         List::Nil => {
//           self.1 = List::Cons(elem, Box::new(List::new()))
//         },
//         _ => tail.append(elem)
//       }
//     }
//   }

//   fn get(&self, n: usize) -> Option<u32> {
//     match *self {
//       List::Cons(head, ref tail) => {
//         if n == 0 {
//           Some(head)
//         } else {
//           self.get(tail, n - 1)
//         }
//       }
//       List::Nil => None,
//     }
//   }

//   fn insert(self, idx: usize, elem: u32) -> List {
//     match idx {
//       0 => self.prepend(elem),
//       i if i >= self.len() - 1 => self.append(elem),
//       i => self,
//     }
//   }

//   fn len(&self) -> usize {
//     match *self {
//       List::Cons(_, ref tail) => 1 + tail.len(),
//       List::Nil => 0,
//     }
//   }

//   fn stringify(&self) -> String {
//     match *self {
//       List::Cons(head, ref tail) => format!("{}, {}", head, tail.stringify()),
//       List::Nil => format!("Nil"),
//     }
//   }

//   // fn clone(&self) -> List {
//   //   let mut res = List::new();
//   //   match *self {
//   //       List::Cons(head, ref tail) => res = tail.prepend(),
//   //       List::Nil => res
//   //   }
//   // }
// }

// mod problem_0206 {

//   // #[derive(Debug)]
//   // pub struct LinkedList<T> {
//   //   val: T,
//   //   next: LinkedList<T>
//   // }

//   // impl Create for LinkedList<T> {
//   //     // add code here
//   // }

//   // pub fn reverse_list<T>(root: LinkedList<T>) {

//   // }
// }

// // #[test]
// // fn test_reverse_list() {
// //   let mut list = List::new();
// //   list = list.prepend(1);
// //   list = list.prepend(2);
// //   list = list.prepend(3);
// //   println!("list len: {}", list.len());
// //   println!("list: {}", list.stringify());
// //   let list2 = list.clone();
// //   println!("list2 len: {}", list2.len());
// //   println!("list2: {}", list2.stringify());
// // }

// #[test]
// fn test_list_append() {
//   let mut list = List::new();
//   list.append(1);
//   list.append(2);
//   list.append(3);
// }
