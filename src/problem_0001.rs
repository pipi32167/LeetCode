
mod problem_0001 {
    pub fn two_sum(nums: Vec<u32>, target: u32) -> Option<(usize, usize)> {
        let len = nums.len();
        for i in 0..len {
            for j in (i+1)..len {
                if nums[i] + nums[j] == target {
                    return Some((i, j))
                }
            }
        }
        None
    }
}

#[test]
fn test_two_sum() {
    assert_eq!(problem_0001::two_sum(vec![2,7,11,15], 9).unwrap(), (0, 1));
    assert!(problem_0001::two_sum(vec![2,7,11,15], 3).is_none());
}