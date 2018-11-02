use regex::Regex;
use std::collections::hash_map::*;

// fn find_duplicate(paths: Vec<&str>, res: &mut Vec<Vec<String>>) {
fn find_duplicate(paths: Vec<&str>) -> Vec<Vec<String>> {
  // fn find_duplicate(paths: Vec<&str>) {
  let mut dict: HashMap<&str, Vec<String>> = HashMap::new();
  let re = Regex::new(r"[\(\)]").unwrap();

  for path in paths {
    let parts: Vec<&str> = path.split(" ").collect();
    let (dir, files) = parts.split_at(1);

    for file in files.iter() {
      let parts2: Vec<&str> = re.split(file).collect();
      let filename: &str = parts2.first().unwrap();
      let content: &str = parts2.iter().nth(1).unwrap();
      let fullpath: String = format!("{}/{}", dir.first().unwrap(), filename);
      if dict.contains_key(content) {
        if let Some(fullpaths) = dict.get_mut(content) {
          fullpaths.push(fullpath)
        }
      } else {
        let mut fullpaths: Vec<String> = vec![fullpath];
        dict.insert(content, fullpaths);
      }
    }
  }

  let mut res: Vec<Vec<String>> = dict
    .values()
    .filter(|e| e.len() > 1)
    .map(|e| e.clone())
    .collect();

  res.sort_by(|a, b| a.cmp(b));
  res
}

#[test]
fn test_find_duplicate() {
  let paths: Vec<&str> = vec![
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
    "root 4.txt(efgh)",
  ];
  let result: Vec<Vec<&str>> = vec![
    vec!["root/a/1.txt", "root/c/3.txt"],
    vec!["root/a/2.txt", "root/c/d/4.txt", "root/4.txt"],
  ];
  assert_eq!(find_duplicate(paths), result);
  let paths: Vec<&str> = vec![
    "root/a 1.txt(abcd) 2.txt(efsfgh)",
    "root/c 3.txt(abdfcd)",
    "root/c/d 4.txt(efggdfh)",
  ];
  let result: Vec<Vec<&str>> = vec![];
  assert_eq!(find_duplicate(paths), result);
}

fn return_str() -> String {
  let s = String::from("test");
  // println!("{:p}", &s);
  s
}

#[test]
fn test_return_str() {
  let s = return_str();
  // println!("{:p}", &s);
  assert_eq!(s, "test");
}

fn return_str_address() -> (String, String) {
  let s = String::from("test");
  (format!("{:p}", &s), s)
}

#[test]
fn test_return_str_address() {
  let (sptr, s) = return_str_address();
  let sptr2 = format!("{}", &s);
  assert_ne!(sptr, sptr2);
  // println!("{}", (return_str_address() as u32).to_hex());
}
