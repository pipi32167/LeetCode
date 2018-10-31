var convert = function (email) {
  let [account, domain] = email.split('@')
  account = account.split('.').join('')
  let idx = account.indexOf('+') 
  if (idx >= 0) {
    account = account.slice(0, idx)
  }
  return [account, domain].join('@')
}

// console.log(convert('xyz@xyz.com') === 'xyz@xyz.com');
// console.log(convert('xyz.z.z@xyz.com') === 'xyzzz@xyz.com');
// console.log(convert('xyz+zz@xyz.com') === 'xyz@xyz.com');

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  
  let res = {}
  for (let i = 0; i < emails.length; i++) {
    const email = convert(emails[i])
    res[email] = true
  }
  return Object.keys(res).length
};

var emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
console.log(numUniqueEmails(emails) === 2);
var emails = new Array(100).fill('test.email+alex@leetcode.com')
console.log(numUniqueEmails(emails) === 1);