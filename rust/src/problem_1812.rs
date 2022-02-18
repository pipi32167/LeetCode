
#[derive(Debug)]
struct Solution {}

impl Solution {
    pub fn square_is_white(coordinates: String) -> bool {

        let i = coordinates.as_bytes()[0] - 'a' as u8;
        let j = coordinates.as_bytes()[1] - '1' as u8;
        return (i + j) % 2 == 1;
    }
}

#[test]
fn test_square_is_white() {
  assert_eq!(Solution::square_is_white("a1".to_string()), false);
  assert_eq!(Solution::square_is_white("h3".to_string()), true);
  assert_eq!(Solution::square_is_white("c7".to_string()), false);
}