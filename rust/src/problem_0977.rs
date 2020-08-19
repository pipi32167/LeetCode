

#[derive(Debug)]
struct Solution {
}

impl Solution {
  pub fn sorted_squares(a: Vec<i32>) -> Vec<i32> {
    let mut ret = a
      .into_iter()
      .map(|x| x * x)
      .collect::<Vec<i32>>();
    ret.sort_unstable();
    ret
  }
}

#[test]
fn test_sorted_squares() {
  let a = vec![-4,-1,0,3,10];
  let expect = vec![0,1,9,16,100];
  let actual = Solution::sorted_squares(a);
  assert_eq!(actual, expect);
  let a = vec![-7,-3,2,3,11];
  let expect = vec![4,9,9,49,121];
  let actual = Solution::sorted_squares(a);
  assert_eq!(actual, expect);
}