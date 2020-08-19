use std::collections::{HashMap, HashSet};

#[derive(Debug)]
struct Solution {}

impl Solution {

  fn is_similar(word1: &String, word2: &String, map: &HashMap<String, HashSet<String>>) -> bool {
    if word1 == word2 {
      return true;
    }
    if map.contains_key(word1) && map.get(word1).unwrap().contains(word2) {
      return true;
    }
    if map.contains_key(word2) && map.get(word2).unwrap().contains(word1) {
      return true;
    }

    false
  }

  pub fn are_sentences_similar(words1: Vec<String>, words2: Vec<String>, pairs: Vec<Vec<String>>) -> bool {

    if words1.len() != words2.len() {
        return false;
    }
    let map: HashMap<String, HashSet<String>> = pairs
      .iter()
      .fold(HashMap::new(), |mut acc, x| {
        let entry = acc.entry(x[0].clone()).or_insert(HashSet::new());
        entry.insert(x[1].clone());
        let entry = acc.entry(x[1].clone()).or_insert(HashSet::new());
        entry.insert(x[0].clone());
        acc
      });

    for i in 0..words1.len() {
      if !Self::is_similar(&words1[i], &words2[i], &map) {
        return false;
      }
    }

    true
  }
}

#[test]
fn test_are_sentences_similar() {
  let words1 = vec_of_strings!["great", "acting", "skills"];
  let words2 = vec_of_strings!["fine", "drama", "talent"];
  let pairs = vec![
    vec_of_strings!["great", "fine"],
    vec_of_strings!["acting", "drama"],
    vec_of_strings!["skills", "talent"],
  ];
  assert!(Solution::are_sentences_similar(words1, words2, pairs));

  let words1 = vec_of_strings!["great", "acting", "skills"];
  let words2 = vec_of_strings!["good", "drama", "talent"];
  let pairs = vec![
    vec_of_strings!["great", "fine"],
    vec_of_strings!["fine", "good"],
    vec_of_strings!["acting", "drama"],
    vec_of_strings!["skills", "talent"],
  ];
  assert!(!Solution::are_sentences_similar(words1, words2, pairs));

  let words1 = vec_of_strings!["great", "acting", "skills"];
  let words2 = vec_of_strings!["fine", "drama"];
  let pairs = vec![
    vec_of_strings!["great", "fine"],
    vec_of_strings!["fine", "good"],
    vec_of_strings!["acting", "drama"],
    vec_of_strings!["skills", "talent"],
  ];
  assert!(!Solution::are_sentences_similar(words1, words2, pairs));

  let words1 = vec_of_strings!["this","summer","thomas","get","actually","actually","rich","and","possess","the","actually","great","and","fine","vehicle","every","morning","he","drives","one","nice","car","around","one","great","city","to","have","single","super","excellent","super","as","his","brunch","but","he","only","eat","single","few","fine","food","as","some","fruits","he","wants","to","eat","an","unique","and","actually","healthy","life"];
  let words2 = vec_of_strings!["this","summer","thomas","get","very","very","rich","and","possess","the","very","fine","and","well","car","every","morning","he","drives","a","fine","car","around","unique","great","city","to","take","any","really","wonderful","fruits","as","his","breakfast","but","he","only","drink","an","few","excellent","breakfast","as","a","super","he","wants","to","drink","the","some","and","extremely","healthy","life"];
  let pairs = vec![
    vec_of_strings!["good","nice"],
    vec_of_strings!["good","excellent"],
    vec_of_strings!["good","well"],
    vec_of_strings!["good","great"],
    vec_of_strings!["fine","nice"],
    vec_of_strings!["fine","excellent"],
    vec_of_strings!["fine","well"],
    vec_of_strings!["fine","great"],
    vec_of_strings!["wonderful","nice"],
    vec_of_strings!["wonderful","excellent"],
    vec_of_strings!["wonderful","well"],
    vec_of_strings!["wonderful","great"],
    vec_of_strings!["extraordinary","nice"],
    vec_of_strings!["extraordinary","excellent"],
    vec_of_strings!["extraordinary","well"],
    vec_of_strings!["extraordinary","great"],
    vec_of_strings!["one","a"],
    vec_of_strings!["one","an"],
    vec_of_strings!["one","unique"],
    vec_of_strings!["one","any"],
    vec_of_strings!["single","a"],
    vec_of_strings!["single","an"],
    vec_of_strings!["single","unique"],
    vec_of_strings!["single","any"],
    vec_of_strings!["the","a"],
    vec_of_strings!["the","an"],
    vec_of_strings!["the","unique"],
    vec_of_strings!["the","any"],
    vec_of_strings!["some","a"],
    vec_of_strings!["some","an"],
    vec_of_strings!["some","unique"],
    vec_of_strings!["some","any"],
    vec_of_strings!["car","vehicle"],
    vec_of_strings!["car","automobile"],
    vec_of_strings!["car","truck"],
    vec_of_strings!["auto","vehicle"],
    vec_of_strings!["auto","automobile"],
    vec_of_strings!["auto","truck"],
    vec_of_strings!["wagon","vehicle"],
    vec_of_strings!["wagon","automobile"],
    vec_of_strings!["wagon","truck"],
    vec_of_strings!["have","take"],
    vec_of_strings!["have","drink"],
    vec_of_strings!["eat","take"],
    vec_of_strings!["eat","drink"],
    vec_of_strings!["entertain","take"],
    vec_of_strings!["entertain","drink"],
    vec_of_strings!["meal","lunch"],
    vec_of_strings!["meal","dinner"],
    vec_of_strings!["meal","breakfast"],
    vec_of_strings!["meal","fruits"],
    vec_of_strings!["super","lunch"],
    vec_of_strings!["super","dinner"],
    vec_of_strings!["super","breakfast"],
    vec_of_strings!["super","fruits"],
    vec_of_strings!["food","lunch"],
    vec_of_strings!["food","dinner"],
    vec_of_strings!["food","breakfast"],
    vec_of_strings!["food","fruits"],
    vec_of_strings!["brunch","lunch"],
    vec_of_strings!["brunch","dinner"],
    vec_of_strings!["brunch","breakfast"],
    vec_of_strings!["brunch","fruits"],
    vec_of_strings!["own","have"],
    vec_of_strings!["own","possess"],
    vec_of_strings!["keep","have"],
    vec_of_strings!["keep","possess"],
    vec_of_strings!["very","super"],
    vec_of_strings!["very","actually"],
    vec_of_strings!["really","super"],
    vec_of_strings!["really","actually"],
    vec_of_strings!["extremely","super"],
    vec_of_strings!["extremely","actually"]];
  assert!(Solution::are_sentences_similar(words1, words2, pairs));
}
