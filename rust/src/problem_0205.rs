use std::collections::hash_map::*;

fn is_isomorphic(s: &str, t: &str) -> bool {
  if s.len() != t.len() {
    return false;
  }

  let mut mapping: HashMap<char, char> = HashMap::new();
  let mut mapping2: HashMap<char, char> = HashMap::new();

  let scs = s.chars();
  let mut tcs = t.chars();
  // println!("scs: {:?}", scs);
  // println!("tcs: {:?}", tcs);
  for sc in scs {
    let tc = tcs.next().unwrap();
    // println!("mapping: {:?}", mapping);
    // println!("mapping2: {:?}", mapping2);
    // println!("sc: {}, tc: {}, cmp1: {:?}, cmp2: {:?}", sc, tc, mapping.get(&sc), mapping2.get(&tc));
    if !mapping.contains_key(&sc) && !mapping2.contains_key(&tc) {
      mapping.insert(sc, tc);
      mapping2.insert(tc, sc);
    } else if mapping.get(&sc) != Some(&tc) || mapping2.get(&tc) != Some(&sc) {
      return false;
    }
  }

  true
}

#[test]
fn test_is_isomorphic() {
  assert_eq!(is_isomorphic("egg", "add"), true);
  assert_eq!(is_isomorphic("aa", "ab"), false);
  assert_eq!(is_isomorphic("ab", "aa"), false);
  assert_eq!(is_isomorphic("foo", "bar"), false);
  assert_eq!(is_isomorphic("paper", "title"), true);
}
