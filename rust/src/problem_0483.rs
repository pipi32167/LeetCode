use std::i64;

#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn smallest_good_base(n: String) -> String {
    let n = i64::from_str_radix(&n, 10).ok().unwrap();
    if n % 2 == 0 {
      return (n - 1).to_string();
    }

    // let is_match = |radix, nums: Vec<i64>| {
    //   let zeros = nums.iter().fold(0, |acc, x| acc + if *x == 1 {1} else {0});
    //   println!("radix: {}, zeros: {}, {:?}", radix, zeros, nums);
    //   (nums.len() as i64) == zeros
    // };

    let slice = |nums: &Vec<i64>, i: usize, mut j: usize| -> Vec<i64> {
      let mut ret = vec![];
      j = j.min(nums.len());
      for k in i..j {
        ret.push(nums[k]);
      }
      ret
    };

    let match_radix = |nums: Vec<i64>| -> Option<Vec<i64>> {
      // println!("match_radix: {:?}", nums);
      if nums[0] != 1 {
        // println!("exit 0");
        return None;
      }
      let mut len = 0;
      for i in 1..nums.len() {
        if nums[i] == 1 {
          len = i;
          break;
        } else if nums[i] != 0 {
          // println!("exit 1");
          return None;
        }
      }

      if len != 1 && nums.len() % len != 1 || nums[nums.len() - 1] != 1 {
        // println!("exit 2");
        return None;
      }
      let part0 = slice(&nums, 0, len);
      let mut i = len;
      while i < nums.len() - 1 {
        let part1 = slice(&nums, i, i + len);
        // println!("{:?} {} {:?}", part0, if part0 == part1 {"="} else {"!="} , part1);
        if part0 != part1 {
          // println!("exit 3");
          return None;
        }
        i += len;
      }

      
      Some([part0, vec![0]].concat())
    };
    let mut radix = 2;
    while radix < n {
      let mut ret = n.clone();
      // while ret > 0 {
      //   if ret % radix != 1 {
      //     break;
      //   }
      //   ret /= radix;
      // }
      // if ret == 0 {
      //   break;
      // }
      let mut nums = vec![];
      while ret > 0 {
        nums.push(ret % radix);
        ret /= radix;
      }
      if let Some(part) = match_radix(nums) {
        println!("part: {:?}", part);
        radix = part.iter().fold(0, |acc, x| acc * radix + x);
        break;
      }
      radix += 1;
    }

    radix.to_string()
  }
}

#[test]
fn test() {
  assert_eq!(
    Solution::smallest_good_base("13".to_owned()),
    "3".to_owned()
  );
  assert_eq!(
    Solution::smallest_good_base("4681".to_owned()),
    "8".to_owned()
  );
  assert_eq!(
    Solution::smallest_good_base("1000000000000000000".to_owned()),
    "999999999999999999".to_owned()
  );
  assert_eq!(
    Solution::smallest_good_base("470988884881403701".to_owned()),
    "999999999999999999".to_owned()
  );
}
