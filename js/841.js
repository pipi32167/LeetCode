/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {

  const isVisited = Array(rooms.length).fill(false)

  const queue = [0]
  let visitedCount = 0
  while (queue.length > 0) {
    const roomId = queue.shift()
    if (isVisited[roomId]) {
      continue
    }
    isVisited[roomId] = true
    visitedCount++
    queue.push(...rooms[roomId])
  }

  return rooms.length === visitedCount
};

var assert = require('assert');
assert.ok(canVisitAllRooms([[1],[2],[3],[]]))
assert.ok(!canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))