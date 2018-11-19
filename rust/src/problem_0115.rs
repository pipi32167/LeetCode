fn find_all_indexes(s: &str, c: &char) -> Vec<usize> {
  let mut res: Vec<usize> = vec![];
  for (i, c2) in s.chars().enumerate() {
    if c == &c2 {
      res.push(i)
    }
  }
  res
}

#[test]
fn test_find_all_indexes() {
  assert_eq!(find_all_indexes("abcabcabc", &'a'), vec![0, 3, 6]);
  assert_eq!(find_all_indexes("abcabcabc", &'d'), vec![0; 0]);
}

fn calc_poss(appear: &Vec<usize>, last_appear: &Vec<usize>, last_poss: &Vec<u64>) -> Vec<u64> {
  // println!(
  //   "appear: {:?}, last_appear: {:?}, last_poss: {:?}",
  //   appear, last_appear, last_poss
  // );
  let mut res: Vec<u64> = vec![];
  for idx in appear.iter() {
    let mut pos = 0usize;
    let mut hit = false;
    for (i, idx2) in last_appear.iter().enumerate() {
      if idx < idx2 {
        pos = i;
        hit = true;
        break;
      }
    }
    if hit {
      let mut count = 0u64;
      for c in last_poss.iter().skip(pos) {
        count += c
      }
      res.push(count);
    } else {
      res.push(0);
    }
  }
  res
}

#[test]
fn test_calc_poss() {
  let appear: Vec<usize> = vec![];
  let last_appear: Vec<usize> = vec![];
  let last_poss: Vec<u64> = vec![];
  let res: Vec<u64> = vec![];
  assert_eq!(calc_poss(&appear, &last_appear, &last_poss), res);
  let appear: Vec<usize> = vec![0, 2];
  let last_appear: Vec<usize> = vec![1, 3];
  let last_poss: Vec<u64> = vec![1, 1];
  let res: Vec<u64> = vec![2, 1];
  assert_eq!(calc_poss(&appear, &last_appear, &last_poss), res);
}

fn num_distinct(s: &str, t: &str) -> u64 {
  let mut appear: Vec<Vec<usize>> = vec![];
  for c in t.chars() {
    appear.push(find_all_indexes(s, &c))
  }

  let appear: Vec<&Vec<usize>> = appear.iter().rev().collect();

  // println!("{:?}", appear);
  let appear2 = appear.as_slice();
  let mut last_poss: Vec<u64> = vec![];
  let mut now_poss: Vec<u64>;
  for (i, a) in appear2[0..appear2.len()].iter().enumerate() {
    if i == 0 {
      now_poss = a.into_iter().map(|_v| 1u64).collect()
    } else {
      now_poss = calc_poss(&a, &appear2[i - 1], &last_poss)
    }
    // println!("{:?}", now_poss);
    last_poss = now_poss
  }

  let mut count = 0u64;
  for c in last_poss {
    count += c
  }
  count
}

#[test]
fn test_compare_vec_items() {
  let mut v: Vec<i32> = vec![0, 0, 1, 1, 2, 2];
  v.push(3);
  let v2 = v.as_slice();
  for (i, e) in v2.iter().enumerate() {
    if i > 0 && &v2[i - 1] == e {
      println!("same: {}, {}", i - 1, i);
    }
  }
}

#[test]
fn test_num_distinct() {
  let s = "abab";
  let t = "ab";
  assert_eq!(num_distinct(s, t), 3);
  let s = "rabbbit";
  let t = "rabbit";
  assert_eq!(num_distinct(s, t), 3);
  let s = "babgbag";
  let t = "bag";
  assert_eq!(num_distinct(s, t), 5);
  let s = "bagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbagbag";
  let t = "bag";
  assert_eq!(num_distinct(s, t), 5410240);
  let s = "adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc";
  let t = "bcddceeeebecbc";
  assert_eq!(num_distinct(s, t), 700531452);
}
