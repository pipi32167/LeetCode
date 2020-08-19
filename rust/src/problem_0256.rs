#[derive(Debug)]
struct Solution {
}

impl Solution {
    
    pub fn min_cost(costs: Vec<Vec<i32>>) -> i32 {
      if costs.len() == 0 {
        return 0;
      }

      let mut min_costs: Vec<Vec<i32>> = vec![vec![0; costs[0].len()]; costs.len()];
      min_costs[0][0] = costs[0][0];
      min_costs[0][1] = costs[0][1];
      min_costs[0][2] = costs[0][2];
      for i in 1..costs.len() {
        min_costs[i][0] += costs[i][0] + min_costs[i-1][1].min(min_costs[i-1][2]);
        min_costs[i][1] += costs[i][1] + min_costs[i-1][0].min(min_costs[i-1][2]);
        min_costs[i][2] += costs[i][2] + min_costs[i-1][0].min(min_costs[i-1][1]);
      }
      // println!("{:?}", min_costs);
      *min_costs.last().unwrap().iter().min().unwrap()
    }
}


#[test]
fn test_min_cost() {
  
  let costs = vec![vec![17,2,17],vec![16,16,5],vec![14,3,19]];
  assert_eq!(Solution::min_cost(costs), 10);
}