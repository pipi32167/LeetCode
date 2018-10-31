const DIRECTION = {
  NORTH: [0,1],
  SOUTH: [0,-1],
  EAST: [1,0],
  WEST: [-1,0]
}
const TURN = {
  LEFT: -2,
  RIGHT: -1,
}

var getDirName = function (dir) {
  for(var k in DIRECTION) {
    if(dir[0] === DIRECTION[k][0] && dir[1] === DIRECTION[k][1]) {
      return k
    }
  }
}


var getTurnName = function (turn) {
  for(var k in TURN) {
    if(turn === TURN[k]) {
      return k
    }
  }
}


var changeDirecton = function (dir, cmd) {
  
  if (dir === DIRECTION.NORTH && cmd === TURN.LEFT) {
    dir = DIRECTION.WEST
  } else if (dir === DIRECTION.NORTH && cmd === TURN.RIGHT) {
    dir = DIRECTION.EAST
  } else if (dir === DIRECTION.SOUTH && cmd === TURN.LEFT) {
    dir = DIRECTION.EAST
  } else if (dir === DIRECTION.SOUTH && cmd === TURN.RIGHT) {
    dir = DIRECTION.WEST
  } else if (dir === DIRECTION.WEST && cmd === TURN.LEFT) {
    dir = DIRECTION.SOUTH
  } else if (dir === DIRECTION.WEST && cmd === TURN.RIGHT) {
    dir = DIRECTION.NORTH
  } else if (dir === DIRECTION.EAST && cmd === TURN.LEFT) {
    dir = DIRECTION.NORTH
  } else if (dir === DIRECTION.EAST && cmd === TURN.RIGHT) {
    dir = DIRECTION.SOUTH
  } else {
    console.log('invalid cmd:', dir, cmd);
  }
  // console.log('changeDirecton: turn %s to %s', getTurnName(cmd), getDirName(dir));
  return dir
}

var go = function (pos, dir, obstacles, cmd) {
  
  for(var i = 0; i < cmd; i++) {
    var nextPos = [pos[0] + dir[0], pos[1] + dir[1]]
    // console.log('try to go', nextPos[0] + ',' + nextPos[1]);
    if (obstacles[nextPos[0] + ',' + nextPos[1]]) {
      // console.log('stop by', {nextPos, pos, dir, cmd});
      break
    }
    pos = nextPos
  }
  return pos
}

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  var obstacles2 = {}
  for(var i = 0; i < obstacles.length; i++) {
    var key = obstacles[i][0] + ',' + obstacles[i][1]
    if (obstacles2[key]) {
      console.log('invalid key', {key, obstacles, i});
    } else {
      obstacles2[key] = true
    }
  }
  // console.log(obstacles2);

  var pos = [0,0], dir = DIRECTION.NORTH
  var max = 0
  for(var i = 0; i < commands.length; i++) {
    var cmd = commands[i]
    // console.log('command before', {i, cmd, dir, pos});
    if (cmd > 0) {
      pos = go(pos, dir, obstacles2, cmd)
      max = Math.max(max, pos[0] * pos[0] + pos[1] * pos[1])
    } else {
      dir = changeDirecton(dir, cmd)
    }
    // console.log('command after ', {i, cmd, dir, pos});
  }
  // console.log({pos, DIRECTION, TURN});
  return max
};

console.log(robotSim([4,-1,3], []), 25);
console.log(robotSim([4,-1,4,-2,4], [[2,4]]), 65);
console.log(robotSim([1,-1,1,-1,1,-1,1,-1,1,-1,1], [[1,0],[-1,0],[0,1],[0,-1]]), 0);
console.log(robotSim([1,-2,1,-2,1,-2,1,-2,1,-2,1], [[1,0],[-1,0],[0,1],[0,-1]]), 0);
var { commands, obstacles = [] } = require('./874_input')
console.log(robotSim(commands, obstacles), 5140);
