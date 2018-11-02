fn remove_comments(source: Vec<&str>) -> Vec<String> {
  let mut result: Vec<char> = vec![];
  let source2 = source.join("\n");
  let mut drop_line_comment = false;
  let mut drop_block_comment = false;
  let mut start_idx: usize = source2.len();

  for (i, c) in source2.chars().enumerate() {
    if drop_line_comment {
      if c == '\n' {
        drop_line_comment = false;
        result.push(c);
      }
      continue;
    }

    if drop_block_comment {
      if c == '/' && source2.chars().nth(i - 1) == Some('*') && start_idx + 1 < i - 1 {
        drop_block_comment = false
      }
      continue;
    }

    if c == '/' && result.iter().last() == Some(&'/') {
      result.pop();
      drop_line_comment = true;
      continue;
    } else if c == '*' && result.iter().last() == Some(&'/') {
      result.pop();
      drop_block_comment = true;
      start_idx = i - 1;
      continue;
    }
    result.push(c);
  }

  result
    .split(|e| *e == '\n')
    .filter(|e| e.len() > 0)
    .map(|e| e.into_iter().collect())
    .collect()
}

#[test]
fn test_join() {
  let strs = vec!["a", "b", "c"];
  // println!("{:?}", strs.join(""));
  assert_eq!(strs.join(""), "abc");
}

#[test]
fn test_remove_comments() {
  let source: Vec<&str> = vec![
    "/*Test program */",
    "int main()",
    "{ ",
    "  // variable declaration ",
    "int a, b, c;",
    "/* This is a test",
    "   multiline  ",
    "   comment for ",
    "   testing */",
    "a = b + c;",
    "}",
  ];
  let result = vec!["int main()", "{ ", "  ", "int a, b, c;", "a = b + c;", "}"];
  assert_eq!(remove_comments(source), result);
  let source: Vec<&str> = vec!["a//comment"];
  let result = vec!["a"];
  assert_eq!(remove_comments(source), result);
  let source: Vec<&str> = vec!["a/*comment", "line", "more_comment*/b"];
  let result = vec!["ab"];
  assert_eq!(remove_comments(source), result);
  let source: Vec<&str> = vec!["a//asasas//asasa/*asas*/", "/*line", "more_comment*/b"];
  let result = ["a", "b"];
  assert_eq!(remove_comments(source), result);
  let source: Vec<&str> = vec![
    "struct Node{",
    "    /*/ declare members;/**/",
    "    int size;",
    "    /**/int val;",
    "};",
  ];
  let result = vec![
    "struct Node{",
    "    ",
    "    int size;",
    "    int val;",
    "};",
  ];
  assert_eq!(remove_comments(source), result);
  let source: Vec<&str> = vec![
    "main() {",
    "  Node* p;",
    "  /* declare a Node",
    "  /*float f = 2.0",
    "   p->val = f;",
    "   /**/",
    "   p->val = 1;",
    "   //*/ cout << success;*/",
    "}",
    " ",
  ];
  let result = vec![
    "main() {",
    "  Node* p;",
    "  ",
    "   p->val = 1;",
    "   ",
    "}",
    " ",
  ];
  assert_eq!(remove_comments(source), result);
  let source: Vec<&str> = vec![
    "main() {",
    "/* here is commments",
    "  // still comments */",
    "   double s = 33;",
    "   cout << s;",
    "}",
  ];
  let result = vec!["main() {", "   double s = 33;", "   cout << s;", "}"];
  assert_eq!(remove_comments(source), result);
  let source: Vec<&str> = vec!["a/* /*/b"];
  let result = vec!["ab"];
  assert_eq!(remove_comments(source), result);
  let source: Vec<&str> = vec!["a/*/*/b"];
  let result = vec!["ab"];
  assert_eq!(remove_comments(source), result);
  let source: Vec<&str> = vec!["a/**/b"];
  let result = vec!["ab"];
  assert_eq!(remove_comments(source), result);
  let source: Vec<&str> = vec!["a//*b//*c", "blank", "d/*/e*//f"];
  let result = vec!["a", "blank", "d/f"];
  assert_eq!(remove_comments(source), result);
}
