mod problem_1356 {
  fn count_bits(num: i32) -> i32 {
    let mut num = num;
    let mut cnt = 0;
    while num > 0 {
      if (num & 1) == 1 { cnt += 1 }
      num >>= 1;
    }
    cnt
  }
  pub fn sort_by_bits(arr: Vec<i32>) -> Vec<i32> {

    let mut arr2 = Vec::from(arr);
    arr2.sort_by(|&a, &b| {
      let ret = count_bits(a) - count_bits(b);
      if ret != 0 { 
        return ret.partial_cmp(&0).unwrap() 
      }
      a.partial_cmp(&b).unwrap()
    });
    arr2
  }
}

#[test]
fn test_sort_by_bits() {

  assert_eq!(problem_1356::sort_by_bits(vec![0,1,2,3,4,5,6,7,8]), [0,1,2,4,8,3,5,6,7]);
  assert_eq!(problem_1356::sort_by_bits(vec![1024,512,256,128,64,32,16,8,4,2,1]), [1,2,4,8,16,32,64,128,256,512,1024]);
}
