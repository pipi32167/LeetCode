
var merge = function (account1, account2) {

  var tmp = {}
  var result = [account1[0]]
  var accounts = [account1, account2]
  for(var j = 0; j < accounts.length; j++) {
    var account = accounts[j]
    for (var i = 1; i < account.length; i++) {
      if (!tmp[account[i]]) {
        result.push(account[i])
        tmp[account[i]] = true
      }
    }
  }
  return result
}

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {

  var repeatIdx = []
  var loop = true
  while(loop) {
    loop = false
    var emails = {}
    for (var i = 0; i < accounts.length; i++) {
      if (repeatIdx.indexOf(i) >= 0) {
        continue
      }
      var elem = accounts[i]
      var idx = i
      var hit = false
      for (var j = 1; j < elem.length; j++) {
        if (emails[elem[j]] !== undefined) {
          hit = true
          idx = emails[elem[j]]
          break
        }
      }

      accounts[idx] = merge(accounts[idx], accounts[i])
      if (hit) {
        repeatIdx.push(i)
        loop = true
      }
      for (var j = 1; j < elem.length; j++) {
        emails[elem[j]] = idx
      }
    }
  }

  return accounts
    .filter((elem, idx) => repeatIdx.indexOf(idx) < 0)
    .map(elem => [elem[0]].concat(elem.slice(1).sort()))
    .sort((a, b) => a[0].localeCompare(b[0]))
};

var accounts = [
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["John", "johnnybravo@mail.com"],
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["Mary", "mary@mail.com"]
]
console.log(accountsMerge(accounts));
var accounts = [
  ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"],
  ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"],
  ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"],
  ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"],
  ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"]
]
console.log(accountsMerge(accounts));
var accounts = [
  ["Alex", "Alex5@m.co", "Alex4@m.co", "Alex0@m.co"],
  ["Ethan", "Ethan3@m.co", "Ethan3@m.co", "Ethan0@m.co"],
  ["Kevin", "Kevin4@m.co", "Kevin2@m.co", "Kevin2@m.co"],
  ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe2@m.co"],
  ["Gabe", "Gabe3@m.co", "Gabe4@m.co", "Gabe2@m.co"]
]
console.log(accountsMerge(accounts));
var accounts = [
  ["Alex", "Alex5@m.co", "Alex4@m.co", "Alex0@m.co", "Alex0@m.co"],
  ["Alex", "Alex6@m.co", "Alex4@m.co", "Alex1@m.co"],
  ["Alex", "Alex8@m.co", "Alex7@m.co", "Alex1@m.co"],
]
console.log(accountsMerge(accounts));
var accounts = [
  ["Alex", "Alex5@m.co", "Alex4@m.co", "Alex0@m.co"],
  ["Ethan", "Ethan3@m.co", "Ethan3@m.co", "Ethan0@m.co"],
  ["Kevin", "Kevin4@m.co", "Kevin2@m.co", "Kevin2@m.co"],
  ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe2@m.co"],
  ["Gabe", "Gabe3@m.co", "Gabe4@m.co", "Gabe2@m.co"]
]
console.log(accountsMerge(accounts));
var accounts = [
  ["David", "David0@m.co", "David1@m.co"],
  ["David", "David3@m.co", "David4@m.co"],
  ["David", "David4@m.co", "David5@m.co"],
  ["David", "David2@m.co", "David3@m.co"],
  ["David", "David1@m.co", "David2@m.co"]
]
console.log(accountsMerge(accounts));
var accounts = require('./721_input')
// console.log(accountsMerge(accounts));