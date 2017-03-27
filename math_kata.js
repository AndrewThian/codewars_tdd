function test () {
  return 'test running'
}

function round (number) {
  return parseInt(number.toFixed(0))
}

function ceil (number) {
  var str = number.toString().split('.')
  if (parseInt(str[1]) > 0) return parseInt(str[0]) + 1
  else return parseInt(str[0])
}

function floor (number) {
  var str = number.toString().split('.')
  if (str.length === 1) return parseInt(str[0])
  if (parseInt(str[1]) > 0) return parseInt(str[0])
}

// ------ kata solution

function roundSol (number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number)
}

function ceilSol (number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1
}

function floorSol (number) {
  return parseInt(number)
}

module.exports = {
  test: test,
  round: round,
  ceil: ceil,
  floor: floor,
  roundSol: roundSol,
  ceilSol: ceilSol,
  floorSol: floorSol
}
