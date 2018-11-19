var assert = require('assert');

var compare = function (nums1, nums2) {
  let lt = false
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] > nums2[i]) {
      return 1
    } else if (nums1[i] < nums2[i]) {
      lt = true
    }
  }
  return lt ? -1 : 0
}

assert.equal(compare([0, 0, 0], [0, 0, 0]), 0)
assert.equal(compare([1, 0, 0], [0, 0, 0]), 1)
assert.equal(compare([0, 0, 0], [1, 0, 0]), -1)
assert.equal(compare([1, 0, 0], [0, 1, 0]), 1)

var add = function (nums1, nums2) {
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    result.push(nums1[i] + nums2[i])
  }
  return result
}

var sub = function (nums1, nums2) {
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    result.push(nums1[i] - nums2[i])
  }
  return result
}

var calcMaxCount = function (gift, needs) {
  let min = Math.pow(2, 31)
  for (let j = 0; j < needs.length; j++) {
    if (gift[j] > 0) {
      min = Math.min(min, Math.floor(needs[j] / gift[j]))
    }
  }
  return min
}

var calcMaxCounts = function (gifts, needs) {
  let result = []
  for (let i = 0; i < gifts.length; i++) {
    result.push(calcMaxCount(gifts[i], needs))
  }
  return result
}

var go = function (gifts, maxCounts, needs, idx, shoppingCart, totalPrice, prefix, result) {

  const res = compare(shoppingCart, needs)
  if (res === 0) {
    // console.log({ shoppingCart, prefix, totalPrice });
    if (result.minPrice > totalPrice) {
      result.minPrice = totalPrice
    }
    return true
  } else if (res > 0 || idx >= gifts.length || totalPrice > result.minPrice) {
    return false
  }

  // const maxCount = maxCounts[idx]
  const maxCount = calcMaxCount(gifts[idx], sub(needs, shoppingCart))
  const gift = gifts[idx]
  for (let i = maxCount; i >= 0; i--) {
    const items = gift.map(e => e * i)
    const cost = items.pop()
    prefix.push(i)
    const res = go(gifts, maxCounts, needs, idx + 1, add(shoppingCart, items), totalPrice + cost, prefix, result)
    prefix.pop()
    if (res) {
      break
    }
  }
  return false
}


/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {

  const gifts = special.concat(price.map((e, idx) => {
    let res = new Array(price.length + 1).fill(0)
    res[idx] = 1
    res[res.length - 1] = e
    return res
  }))
  const maxCounts = calcMaxCounts(gifts, needs)
  // console.log({ gifts, needs });

  let minPrice = 0
  for (let i = 0; i < price.length; i++) {
    minPrice += needs[i] * price[i]
  }
  let result = {
    minPrice
  }
  go(gifts, maxCounts, needs, 0, new Array(needs.length).fill(0), 0, [], result)
  return result.minPrice
};

var assert = require('assert');
assert.equal(shoppingOffers([2, 5], [
  [3, 0, 5],
  [1, 2, 10]
], [3, 2]), 14)
assert.equal(shoppingOffers([2, 3, 4], [
  [1, 1, 0, 4],
  [2, 2, 1, 9]
], [1, 2, 1]), 11)