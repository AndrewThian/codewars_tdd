function test () {
  return 'Test function running'
}

function createPhoneNumber (numbers) {
  if (typeof numbers !== typeof []) return -1
  for (var i = 0; i < 10; i++) {
    numbers[i] = numbers[i] || 0
  }
  let numArr = numbers
  numArr.splice(0, 0, '(')
  numArr.splice(4, 0, ')')
  numArr.splice(5, 0, ' ')
  numArr.splice(9, 0, '-')

  let result = numArr.reduce((all, item, ind) => {
    // console.log(ind)
    let sum = all
    sum += item
    return sum
  }, '')
  return result
}

// kata solution (super cool) //

// used a template for the formate and replaced each x with a number

function createPhoneNumberSol (numbers) {
  var format = '(xxx) xxx-xxxx'

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }

  return format
}

console.log(createPhoneNumberSol([1, 2, 3, 4, 5, 6, 7, 8]))

module.exports = {
  test: test,
  createPhoneNumber: createPhoneNumber,
  createPhoneNumberSol: createPhoneNumberSol
}
