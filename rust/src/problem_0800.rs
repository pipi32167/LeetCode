use std::i32;

#[derive(Debug)]
struct Solution {}

impl Solution {
  fn get_closest_color(s: &str) -> Result<String, String> {
    let colors: Vec<i32> = vec![
      0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88, 0x99, 0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF,
    ];
    
    if let Ok(color) = i32::from_str_radix(s, 16) {
      let mut min = i32::MAX;
      let mut closest_color = 0;
      for c in colors {
        let ret = (c - color).abs();
        if min > ret {
          min = ret;
          closest_color = c;
        }
      }
      Ok(format!("{:02x}", closest_color))
    } else {
      Err(format!("Invalid color: {}", s))
    }
  }

  pub fn similar_rgb(color: String) -> String {
    let mut ret = String::from("#");
    let mut i = 1;
    let len = color.len();
    while i < len {
      let c = &color[i..i + 2];
      let r = Self::get_closest_color(c);
      if r.is_err() {
        println!("{}", r.err().unwrap());
        break;
      }
      ret.push_str(&r.ok().unwrap());
      i += 2;
    }
    ret
  }
}


#[test]
fn test() {
  let color = "#09f166".to_string();
  let expect = "#11ee66".to_string();
  let actual = Solution::similar_rgb(color);
  assert_eq!(actual, expect);

  let color = "#1c9e03".to_string();
  let expect = "#229900".to_string();
  let actual = Solution::similar_rgb(color);
  assert_eq!(actual, expect);

}