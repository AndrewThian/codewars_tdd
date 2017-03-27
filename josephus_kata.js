function test () {
  return 'Test function running'
}

function josephus (people, interval) {
  var deaths = []
  var index = 0
  var len = people.length
  // console.log('length of array', len)
  // console.log('====== start loop ======');

  while (len = people.length) {
    // console.log('alive array length', people.length)
    // adding % len causes the loop to break when the index is 0
    index = (index + (interval - 1)) % len
    // console.log('current index is', index)
    // console.log('person', people[index], 'has died')
    deaths.push(people[index])
    // console.log('pushed into death', deaths)
    // console.log('removed person', people[index], 'from alive')
    people.splice(index, 1)
    // console.log(people)
    // console.log('============== event end ==============')
  }
  return deaths
}

josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)

module.exports = {
  test: test,
  josephus: josephus
}
