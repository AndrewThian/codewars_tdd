function sum_pairs (ints, s) {
  var saved = {}
  for (var i = 0; i < ints.length; i++) {
    console.log('****** current loop: ', i, ', current number: ', ints[i], ' ********')
    console.log('before if statment: ', ints[i])
    console.log(`${s} - ${ints[i]} = `, s - ints[i])
    console.log(saved[s - ints[i]])
    // condition would only continue if number is saved in obj
    if (saved[s - ints[i]]) {
      console.log([s - ints[i], ints[i]])
      return [s - ints[i], ints[i]]
    }
    console.log('after if statement: ', ints[i])
    saved[ints[i]] = true
    console.log(saved)
  }
}

let l1 = [1, 4, 8, 7, 3, 15]
let l2 = [1, -2, 3, 0, -6, 1]
let l3 = [20, -13, 40]
let l4 = [1, 2, 3, 4, 1, 0]
let l5 = [10, 5, 2, 3, 7, 5]
let l6 = [4, -2, 3, 3, 4]
let l7 = [0, 2, 0]
let l8 = [5, 9, 13, -3]

sum_pairs(l1, 8)
console.log('next function call =============')
sum_pairs(l2, -6)
console.log('next function call =============')
sum_pairs(l3, -7)
console.log('next function call =============')
sum_pairs(l4, 2)
console.log('next function call =============')
sum_pairs(l5, 10)
console.log('next function call =============')
sum_pairs(l6, 8)
console.log('next function call =============')
sum_pairs(l7, 0)
console.log('next function call =============')
sum_pairs(l8, 10)
console.log('next function call =============')
