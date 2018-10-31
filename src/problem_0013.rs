fn roman_to_int(s: &str) -> u32 {
  let roman_words: Vec<&str> = vec![
    "IV", "IX", "XL", "XC", "CD", "CM", "I", "V", "X", "L", "C", "D", "M",
  ];
  let roman_nums: Vec<u32> = vec![4, 9, 40, 90, 400, 900, 1, 5, 10, 50, 100, 500, 1000];

  let mut i = 0;
  let mut result = 0;
  while i < s.len() {
    // println!("while: {}", i);
    for (j, word) in roman_words.iter().enumerate() {
      // println!("for: {}, {}, {}, {}, {}, {}", j, word, roman_nums[j], &&s[i..i+(word.len())], word, &&s[i..(i+word.len())] == word);
      let end = (i + word.len()).min(s.len());
      if &&s[i..end] == word {
        i += word.len();
        result += roman_nums[j];
        break;
      }
    }
  }
  result
}

#[test]
fn test_roman_to_int() {
  assert!(&"abc"[1..3] == "bc");
  assert!("abc"[1..3] == "bc"[0..2]);
  assert_eq!("abc"[1..3], "bc"[0..2]);
  assert_eq!(roman_to_int("III"), 3);
  assert_eq!(roman_to_int("IV"), 4);
  assert_eq!(roman_to_int("IX"), 9);
  assert_eq!(roman_to_int("LVIII"), 58);
  assert_eq!(roman_to_int("MCMXCIV"), 1994);
}
