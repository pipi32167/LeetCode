var find = function (tickets, map, fromAirport, prefix, result) {
  if (tickets.length === prefix.length - 1) {
    result.res = prefix.slice(0)
    return true
  }

  // console.log({ fromAirport, prefix });
  const toAirports = map.get(fromAirport) || []
  for (let i = 0; i < toAirports.length; i++) {
    const e = toAirports[i]
    if (!e) {
      continue
    }
    prefix.push(e)
    toAirports[i] = null
    if (find(tickets, map, e, prefix, result)) {
      return true
    }
    prefix.pop()
    toAirports[i] = e
  }
  return false
}

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {

  const map = new Map()
  for (let i = 0; i < tickets.length; i++) {

    const ticket = tickets[i]
    map.set(ticket[0], (map.get(ticket[0]) || []).concat([ticket[1]]).sort())
  }

  const prefix = ['JFK']
  const result = { res: [] } 
  find(tickets, map, prefix[0], prefix, result)
  return result.res
};


var assert = require('assert');
var tickets = [
  ["JFK", "KUL"],
  ["JFK", "NRT"],
  ["NRT", "JFK"]
]
var result = ["JFK", "NRT", "JFK", "KUL"]
assert.deepEqual(findItinerary(tickets), result)
var tickets = [
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"]
]
var result = ["JFK", "MUC", "LHR", "SFO", "SJC"]
assert.deepEqual(findItinerary(tickets), result)
var tickets = [
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["ATL", "SFO"]
]
var result = ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]
assert.deepEqual(findItinerary(tickets), result)