/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  
  var minIdxSum = Math.pow(2, 31), result
  for(var i = 0; i < list1.length; i++) {
    for(var j = 0; j < list2.length; j++) {
      
      if (list1[i] === list2[j]) {
        if (minIdxSum > i + j) {
          result = [list1[i]]
          minIdxSum = i + j
        } else if (minIdxSum === i + j) {
          result.push(list1[i])
        }
      }
    }
  }
  return result
};

var list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
var list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
console.log(findRestaurant(list1, list2), ["Shogun"]);

var list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
var list2 = ["KFC", "Shogun", "Burger King"]
console.log(findRestaurant(list1, list2), ["Shogun"]);