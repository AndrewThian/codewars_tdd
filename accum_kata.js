function test () {
  return 'Test function running'
}

function accum (s) {
  if (typeof s === typeof 0) return -1
  var init = ''
  for (let i = 0; i < s.length; i++) {
    // console.log('current letter', s[i], i);
    var counter = 0
    for (let j = 0; j <= i; j++) {
      // console.log('current loop in letter based on index', j);
      if (j === 0) {
        init += s[i].toUpperCase()
        counter++
      } else {
        init += s[i].toLowerCase()
        counter++
      }
      if (counter === i + 1) init += '-'
    }
  }
  var result = init.split('').slice(0, -1)
  return result.join('')
}

// ----- Kata solution

function accumSol1 (str) {
  var letters = str.split('')
  var result = []
  console.log('initializing loop')
  console.log('~~~~~~~~~~~~~~~~~~~~')
  for (var i = 0; i < letters.length; i++) {
    console.log('current letter in loop', letters[i].toUpperCase())
    console.log('array initialized', Array(i + 1))
    console.log(`join array elements with ${letters[i]} string: `, Array(i + 1).join(letters[i].toLowerCase()))
    console.log('awaiting to push into result: ', letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()))
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()))
    console.log('pushed created string into: ', result)
    console.log('=====================')
    // Array synatax creates an empty array with the number of elements
    // Array(i).join adds the letters inbetween each array element - reasons why we need i + 1
  }
  console.log('Array joined and returned..')
  return result.join('-')
}

module.exports = {
  test: test,
  accum: accum,
  accumSol: accumSol1
}
