

#[derive(Debug)]
struct Solution {}


impl Solution {
    pub fn words_typing(sentence: Vec<String>, rows: i32, cols: i32) -> i32 {
      
      let mut cnt = 0;
      let mut remain_rows = rows;
      let mut remain_cols = cols;
      let mut i = 0;
      let mut hit = false;
      while remain_rows > 0 {
        // println!("rows: {}, cols: {}, sentence: {}", remain_rows, remain_cols, sentence[i]);
        if remain_cols == cols && i == 0 && cnt > 0 {
          // println!("rows: {}, remain_rows: {}, cnt: {}", rows, remain_rows, cnt);
          hit = true;
          break;
        }
        if remain_cols >= sentence[i].len() as i32 {
          remain_cols -= sentence[i].len() as i32 + 1;
          i += 1;
          if i >= sentence.len() {
            i = 0;
            cnt += 1;
          }
        } else {
          remain_cols = cols;
          remain_rows -= 1;
        }
      }

      if hit {
        rows / (rows - remain_rows) * cnt + 
        Self::words_typing(sentence, rows % (rows - remain_rows), cols)
      } else {
        cnt
      }
    }
}

#[test]
fn test() {
  let rows = 2;
  let cols = 8;
  let sentence = vec_of_strings!["hello", "world"];
  assert_eq!(Solution::words_typing(sentence, rows, cols), 1);

  let rows = 3;
  let cols = 6;
  let sentence = vec_of_strings!["a", "bcd", "e"];
  assert_eq!(Solution::words_typing(sentence, rows, cols), 2);

  let rows = 4;
  let cols = 5;
  let sentence = vec_of_strings!["I", "had", "apple", "pie"];
  assert_eq!(Solution::words_typing(sentence, rows, cols), 1);


  let rows = 2;
  let cols = 2;
  let sentence = vec_of_strings!["a", "b"];
  assert_eq!(Solution::words_typing(sentence, rows, cols), 1);

  let rows = 2;
  let cols = 3;
  let sentence = vec_of_strings!["a", "b"];
  assert_eq!(Solution::words_typing(sentence, rows, cols), 2);

  let rows = 10000;
  let cols = 9001;
  let sentence = vec_of_strings!["try","to","be","better"];
  assert_eq!(Solution::words_typing(sentence, rows, cols), 5293333);
}
