use regex::Regex;
use std::u32;

fn is_valid_part_ipv4(s: &str) -> bool {
  if s.len() == 0 || s.len() > 3 {
    // println!("return 1: {}", s);
    return false;
  }

  match Regex::new(r"\D").unwrap().find(s) {
    Some(_) => false,
    None => {
      let num: u32 = s.parse().unwrap();
      if num.to_string() != s {
        // println!("return 2: {}", s);
        return false;
      }
      if num > 255 {
        // println!("return 3: {}", s);
        return false;
      }
      true
    }
  }
}

fn is_valid_part_ipv6(s: &str) -> bool {
  if s.len() == 0 || s.len() > 4 {
    return false;
  }

  match Regex::new(r"[^\da-fA-F]").unwrap().find(s) {
    Some(_) => false,
    None => true,
  }
}

fn is_valid_ip_addr(s: &str) -> &str {
  let parts: Vec<&str> = Regex::new(r"[\.:]").unwrap().split(s).collect();
  if parts.len() != 4 && parts.len() != 8 {
    println!("return neither: {:?}", parts);
    return "Neither";
  }

  let is_valid_part_fn: fn(&str) -> bool = if parts.len() == 4 {
    is_valid_part_ipv4
  } else {
    is_valid_part_ipv6
  };
  for part in parts.iter() {
    if !is_valid_part_fn(part) {
      println!("return neither: {}", part);
      return "Neither";
    }
  }
  if parts.len() == 4 {
    "IPv4"
  } else {
    "IPv6"
  }
}

#[test]
fn test_is_valid_part_ipv4() {
  assert_eq!(Regex::new(r"\D").unwrap().find("0"), None);
  assert_eq!(is_valid_part_ipv4("0"), true);
  assert_eq!(is_valid_part_ipv4("255"), true);
  assert_eq!(is_valid_part_ipv4("12"), true);
  assert_eq!(is_valid_part_ipv4("a"), false);
  assert_eq!(is_valid_part_ipv4("1a"), false);
  assert_eq!(is_valid_part_ipv4("1213"), false);
  assert_eq!(is_valid_part_ipv4("1("), false);
}

#[test]
fn test_is_valid_part_ipv6() {
  assert!(Regex::new(r"[^\da-fA-F]").unwrap().find("ZZZZ").is_some());
  assert!(Regex::new(r"[^\da-fA-F]").unwrap().find("1234").is_none());
  assert!(Regex::new(r"[^\da-fA-F]").unwrap().find("ffff").is_none());
  assert!(Regex::new(r"[^\da-fA-F]").unwrap().find("FFFF").is_none());
  assert_eq!(is_valid_part_ipv6("0"), true);
  assert_eq!(is_valid_part_ipv6("0000"), true);
  assert_eq!(is_valid_part_ipv6("0FFF"), true);
  assert_eq!(is_valid_part_ipv6("FFFF"), true);
  assert_eq!(is_valid_part_ipv6("abcD"), true);
  assert_eq!(is_valid_part_ipv6("10z"), false);
  assert_eq!(is_valid_part_ipv6(""), false);
  assert_eq!(is_valid_part_ipv6("12345"), false);
  assert_eq!(is_valid_part_ipv6("01234"), false);
}

#[test]
fn test_is_valid_ip_addr() {
  assert_eq!(
    Regex::new(r"[\.:]")
      .unwrap()
      .split("172.16.254.1")
      .collect::<Vec<&str>>(),
    vec!["172", "16", "254", "1"]
  );
  assert_eq!(
    Regex::new(r"[\.:]")
      .unwrap()
      .split("172:16:254:1")
      .collect::<Vec<&str>>(),
    vec!["172", "16", "254", "1"]
  );
  assert_eq!(is_valid_ip_addr("172.16.254.1"), "IPv4");
  assert_eq!(is_valid_ip_addr("172.16.254.01"), "Neither");
  assert_eq!(is_valid_ip_addr("172.16.254.1.1"), "Neither");
  assert_eq!(
    is_valid_ip_addr("2001:0db8:85a3:0000:0000:8a2e:0370:7334"),
    "IPv6"
  );
  assert_eq!(is_valid_ip_addr("2001:db8:85a3:0:0:8A2E:0370:7334"), "IPv6");
  assert_eq!(
    is_valid_ip_addr("2001:0db8:85a3::8A2E:0370:7334"),
    "Neither"
  );
  assert_eq!(
    is_valid_ip_addr("02001:0db8:85a3:0000:0000:8a2e:0370:7334"),
    "Neither"
  );
  assert_eq!(
    is_valid_ip_addr(":0db8:85a3:0000:0000:8a2e:0370:7334"),
    "Neither"
  );
}
