#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn replace_elements(mut arr: Vec<i32>) -> Vec<i32> {
    // let mut max = -1;
    // arr
    //   .iter()
    //   .rev()
    //   .map(|x| {
    //     println!("{}", *x);
    //     let ret = max;
    //     max = max.max(*x);
    //     ret
    //   })
    //   .collect::<Vec<i32>>()
    //   .into_iter()
    //   .rev()
    //   .collect()

    let mut max = -1;
    for i in (0..arr.len()).rev() {
      let r = max;
      max = max.max(arr[i]);
      arr[i] = r;
    }
    arr
  }
}

#[test]
fn test() {
  let arr = vec![17, 18, 5, 4, 6, 1];
  let expect = vec![18, 6, 6, 6, 1, -1];
  assert_eq!(Solution::replace_elements(arr), expect);
}
