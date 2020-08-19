#[derive(Debug)]
struct Solution {}
impl Solution {

  pub fn get_modified_array(length: i32, updates: Vec<Vec<i32>>) -> Vec<i32> {

    let mut ret = vec![0; length as usize];
    for update in updates {
      let (start, end, inc) = (update[0] as usize, update[1] as usize, update[2]);
      ret[start] += inc;
      if end + 1 < ret.len() {
        ret[end + 1] -= inc;
      }
    }
    for i in 1..ret.len() {
      ret[i] += ret[i-1];
    }
    ret
  }
}

#[test]
fn test_get_modified_array() {
  let length = 5;
  let updates = vec![vec![1, 3, 2], vec![2, 4, 3], vec![0, 2, -2]];
  let expect = vec![-2,0,3,5,3];
  let actual = Solution::get_modified_array(length, updates);
  assert_eq!(actual, expect);
}
