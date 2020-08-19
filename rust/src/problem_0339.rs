#[derive(Debug, PartialEq, Eq)]
pub enum NestedInteger {
  Int(i32),
  List(Vec<NestedInteger>),
}

#[derive(Debug)]
struct Solution {}

impl Solution {
  fn solve(nested_list: NestedInteger, depth: i32) -> i32 {
    match nested_list {
      NestedInteger::Int(n) => n * depth,
      NestedInteger::List(l) => {
        let mut ret = 0;
        for e in l {
          ret += Self::solve(e, depth + 1);
        }
        ret
      },
    }
  }

  pub fn depth_sum(nested_list: Vec<NestedInteger>) -> i32 {
    Self::solve(NestedInteger::List(nested_list), 0)
  }
}

#[test]
fn test() {
  let list = vec![
    NestedInteger::List(vec![NestedInteger::Int(1), NestedInteger::Int(1)]),
    NestedInteger::Int(2),
    NestedInteger::List(vec![NestedInteger::Int(1), NestedInteger::Int(1)]),
  ];
  let expect = 10;
  let actual = Solution::depth_sum(list);
  assert_eq!(actual, expect);
}
