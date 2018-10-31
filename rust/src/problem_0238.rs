
fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
  let mut dp1: Vec<i32> = vec![];
  let mut dp2: Vec<i32> = vec![];
  let mut prod = 1;
  for num in nums.iter() {
    prod *= num;
    dp1.push(prod)
  }
  prod = 1;
  // println!("dp1: {:?}", dp1);
  for num in nums.iter().rev() {
    prod *= num;
    dp2.push(prod)
  }
  dp2.reverse();
  // println!("dp2: {:?}", dp2);
  let mut result: Vec<i32> = vec![];
  result.resize(nums.len(), 1);
  for (i, res) in result.iter_mut().enumerate() {
    if i > 0 {
      *res *= dp1[i - 1];
    }
    if i < nums.len() - 1 {
      *res *= dp2[i + 1];
    }
  }
  result
}

#[test]
fn test_product_except_self() {
  assert_eq!(product_except_self(vec![1, 2, 3, 4]), vec![24, 12, 8, 6]);
}
