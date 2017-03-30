function createPhoneNumber (numbers) {
  let numArr = numbers
  numArr.splice(0, 0, '(')
  numArr.splice(4, 0, ')')
  numArr.splice(5, 0, ' ')
  numArr.splice(9, 0, '-')

  let result = numArr.reduce((all, item, id) => {
    let sum = all
    sum += item
    return sum
  }, '')
  return result
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// kata solution (super cool) //

//used a template for the formate and replaced each x with a number

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";

  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }

  return format;
}
