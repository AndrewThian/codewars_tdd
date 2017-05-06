function test () {
  return 'Test function running'
}

function dirReduc (arr) {
  let i = 0
  while (i < arr.length) {
    if ((arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') ||
    (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH') ||
    (arr[i] === 'EAST' && arr[i + 1] === 'WEST') ||
    (arr[i] === 'WEST' && arr[i + 1] === 'EAST')) {
      arr.splice(i, 2)
      i--
    } else {
      i++
    }
  }
  return arr
}

// kata solution using reduce
function dirReducSol (plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'}
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) {
      dirs.pop()
    } else {
      dirs.push(dir)
    }
    return dirs
  }, [])
}

console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']))

module.exports = {
  test: test,
  dirReduc: dirReduc,
  dirReducSol: dirReducSol
}
