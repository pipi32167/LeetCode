//detail: http://cglab.ca/~abeinges/blah/too-many-lists/book/third-final.html

use std::rc::Rc;

#[derive(Debug, Clone)]
struct List<T> {
  head: Link<T>,
  // tail: Link<T>,
}

type Link<T> = Option<Rc<Node<T>>>;

#[derive(Debug, Clone)]
struct Node<T> {
  elem: T,
  next: Link<T>,
  // prev: Link<T>,
}

// #[derive(Debug)]
// struct Iter<'a, T: 'a> {
//   next: Option<&'a Node<T>>,
// }

impl<T> List<T> {
  fn new() -> Self {
    List {
      head: None,
      // tail: None,
    }
  }

  fn prepend(&self, elem: T) -> Self {
    let node = Some(Rc::new(Node {
      elem: elem,
      next: self.head.clone(),
      // prev: None,
    }));
    List {
      head: node.clone(),
      // tail: if self.tail.is_none() {
      //   node.clone()
      // } else {
      //   self.tail.clone()
      // },
    }
  }

  // fn append(&self, elem: T) -> Self {

  //   let mut result = List<T>::new()
    
  // }

  // fn append(&self, elem: T) -> Self {
  //   let node = Some(Rc::new(Node {
  //     elem: elem,
  //     next: None,
  //     prev: self.tail.clone(),
  //   }));
  //   let head = if self.head.is_none() {
  //     node.clone()
  //   } else {
  //     let mut head = self.head.clone();
  //     head.unwrap().next = node;
  //     head
  //   };
  //   List {
  //     head: head,
  //     tail: node.clone(),
  //   }
  // }

  fn as_slice(&mut self) -> Vec<T>
  where
    T: Clone,
  {
    let mut result: Vec<T> = vec![];
    let mut now = self.head.clone();
    while let Some(node) = now.clone() {
      result.push(node.elem.clone());
      now = node.next.clone()
    }
    result
  }
}

#[test]
fn test_linked_list() {
  let mut ll: List<u32> = List::new();
  // ll = ll.append(1);
  // println!("{:?}", ll);
  // ll = ll.append(2);
  // println!("{:?}", ll);
  // assert_eq!(ll.as_slice(), vec![1, 2]);
  ll = ll.prepend(3);
  ll = ll.prepend(4);
  assert_eq!(ll.as_slice(), vec![4, 3]);
}
