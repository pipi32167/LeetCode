
#[derive(Debug)]
struct Solution {
}

impl Solution {
    pub fn defang_i_paddr(address: String) -> String {
      
      address
        .split('.')
        .collect::<Vec<&str>>()
        .join("[.]")
    }
}