#[derive(Debug)]
struct Solution {}

fn calc_moves((mut x0, mut y0): (i32, i32), (x1, y1): (i32, i32)) -> i32 {
  let mut ret = 0;
  if x0 != x1 && y0 != y1 {
    let x_diff = x0 - x1;
    let y_diff = y0 - y1;
    if x_diff.abs() < y_diff.abs() {
      x0 -= x_diff;
      y0 -= x_diff.abs() * y_diff / y_diff.abs();
      ret += x_diff.abs();
    } else {
      x0 -= y_diff.abs() * x_diff / x_diff.abs();
      y0 -= y_diff;
      ret += y_diff.abs();
    }
  }
  if x0 != x1 {
    ret += (x0 - x1).abs();
  }
  if y0 != y1 {
    ret += (y0 - y1).abs();
  }
  ret
}

impl Solution {
  pub fn min_time_to_visit_all_points(points: Vec<Vec<i32>>) -> i32 {
    let mut p0 = &points[0];
    let mut ret = 0;
    for i in 1..points.len() {
      let p1 = &points[i];
      let moves = calc_moves((p0[0], p0[1]), (p1[0], p1[1]));
      // println!("{:?} => {:?} : {}", p0, p1, moves);
      ret += moves;
      p0 = p1;
    }
    ret
  }
}

#[test]
fn test() {
  let points = vec_of_vec![[1, 1], [3, 4], [-1, 0]];
  assert_eq!(Solution::min_time_to_visit_all_points(points), 7);

  let points = vec_of_vec![[3, 2], [-2, 2]];
  assert_eq!(Solution::min_time_to_visit_all_points(points), 5);

  let points = vec_of_vec![
    [559, 511],
    [932, 618],
    [-623, -443],
    [431, 91],
    [838, -127],
    [773, -917],
    [-500, -910],
    [830, -417],
    [-870, 73],
    [-864, -600],
    [450, 535],
    [-479, -370],
    [856, 573],
    [-549, 369],
    [529, -462],
    [-839, -856],
    [-515, -447],
    [652, 197],
    [-83, 345],
    [-69, 423],
    [310, -737],
    [78, -201],
    [443, 958],
    [-311, 988],
    [-477, 30],
    [-376, -153],
    [-272, 451],
    [322, -125],
    [-114, -214],
    [495, 33],
    [371, -533],
    [-393, -224],
    [-405, -633],
    [-693, 297],
    [504, 210],
    [-427, -231],
    [315, 27],
    [991, 322],
    [811, -746],
    [252, 373],
    [-737, -867],
    [-137, 130],
    [507, 380],
    [100, -638],
    [-296, 700],
    [341, 671],
    [-944, 982],
    [937, -440],
    [40, -929],
    [-334, 60],
    [-722, -92],
    [-35, -852],
    [25, -495],
    [185, 671],
    [149, -452]
  ];
  assert_eq!(Solution::min_time_to_visit_all_points(points), 49088);
}
