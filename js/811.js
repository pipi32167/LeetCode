/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {

  const map = new Map
  for (let i = 0; i < cpdomains.length; i++) {
    let [times, domain] = cpdomains[i].split(' ')
    times = Number(times)
    domain = domain.split('.')
    // console.log({times, domain});

    for (let j = 0; j < domain.length; j++) {
      const domain2 = domain.slice(j).join('.')
      map.set(domain2, (map.get(domain2) || 0) + times)
    }
  }
  // console.log(cpdomains, map);
  return Array.from(map.entries())
    .map(e => e.reverse().join(' '))
    .sort()
};

var assert = require('assert');
var input = ["9001 discuss.leetcode.com"]
var output = ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"].sort()
assert.deepEqual(subdomainVisits(input), output)
var input = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
var output = ["901 mail.com", "50 yahoo.com", "900 google.mail.com", "5 wiki.org", "5 org", "1 intel.mail.com", "951 com"].sort()
assert.deepEqual(subdomainVisits(input), output)