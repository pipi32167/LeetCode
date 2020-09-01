#[derive(Debug)]
struct Solution {}

impl Solution {
    pub fn add_to_array_form(mut a: Vec<i32>, mut k: i32) -> Vec<i32> {
        
      let mut b = vec![];
      while k > 0 {
        b.push(k % 10);
        k /= 10;
      }

      a.reverse();
      
      let mut ret = vec![];
      let mut carry = 0;
      let len = a.len().max(b.len());
      for i in 0..len {
        let n1 = if a.len() > i { a[i] } else { 0 };
        let n2 = if b.len() > i { b[i] } else { 0 };
        let r = n1 + n2 + carry;
        carry = r / 10;
        ret.push(r % 10);
      }

      if carry > 0 {
        ret.push(carry);
      }
      ret.reverse();
      ret
    }
}

#[test]
fn test() {
    
  let a = vec![1,2,0,0];
  let k = 34;
  let expect = vec![1,2,3,4];
  assert_eq!(Solution::add_to_array_form(a, k), expect);

  let a = vec![2,7,4];
  let k = 181;
  let expect = vec![4,5,5];
  assert_eq!(Solution::add_to_array_form(a, k), expect);

  let a = vec![2,1,5];
  let k = 806;
  let expect = vec![1,0,2,1];
  assert_eq!(Solution::add_to_array_form(a, k), expect);

  let a = vec![9,9,9,9,9,9,9,9,9,9];
  let k = 1;
  let expect = vec![1,0,0,0,0,0,0,0,0,0,0];
  assert_eq!(Solution::add_to_array_form(a, k), expect);
}