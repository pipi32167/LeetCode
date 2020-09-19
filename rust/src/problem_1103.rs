#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn distribute_candies(candies: i32, num_people: i32) -> Vec<i32> {
    let mut distribute = 0;
    let mut i = 1;
    let mut j = 0;
    let mut ret = vec![0; num_people as usize];
    loop {
      if distribute + i >= candies {
        break;
      }
      ret[j] += i;
      distribute += i;
      i += 1;
      j += 1;
      if j >= ret.len() {
        j = 0;
      }
    }
    ret[j] += candies - distribute;
    ret
  }
}

#[test]
fn test() {
  let candies = 7;
  let num_people = 4;
  let expect = vec![1,2,3,1];
  assert_eq!(Solution::distribute_candies(candies, num_people), expect);

  let candies = 10;
  let num_people = 3;
  let expect = vec![5,2,3];
  assert_eq!(Solution::distribute_candies(candies, num_people), expect);

  let candies = (10 as i32).pow(9);
  let num_people = 1000;
  // let expect = vec![5,2,3];
  Solution::distribute_candies(candies, num_people);
}