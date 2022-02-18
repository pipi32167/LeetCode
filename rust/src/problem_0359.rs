use std::collections::HashMap;

struct Logger {
    logs: HashMap<String, i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Logger {
    /** Initialize your data structure here. */
    fn new() -> Self {
        Self {
            logs: HashMap::new(),
        }
    }

    /** Returns true if the message should be printed in the given timestamp, otherwise returns false.
    If this method returns false, the message will not be printed.
    The timestamp is in seconds granularity. */
    fn should_print_message(&mut self, timestamp: i32, message: String) -> bool {
        let entry = self.logs.entry(message).or_insert(timestamp - 10);

        if *entry + 10 <= timestamp {
            *entry = timestamp;
            true
        } else {
            false
        }
    }
}

#[test]
fn test() {
    let mut logger = Logger::new();

    // 日志内容 "foo" 在时刻 1 到达系统
    assert!(logger.should_print_message(1, "foo".to_owned()));

    // 日志内容 "bar" 在时刻 2 到达系统
    assert!(logger.should_print_message(2, "bar".to_owned()));

    // 日志内容 "foo" 在时刻 3 到达系统
    assert!(!logger.should_print_message(3, "foo".to_owned()));

    // 日志内容 "bar" 在时刻 8 到达系统
    assert!(!logger.should_print_message(8, "bar".to_owned()));

    // 日志内容 "foo" 在时刻 10 到达系统
    assert!(!logger.should_print_message(10, "foo".to_owned()));

    // 日志内容 "foo" 在时刻 11 到达系统
    assert!(logger.should_print_message(11, "foo".to_owned()));
}
