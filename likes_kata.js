function likes (names) {
  if (names.length === 0) return 'no one likes this'
  if (names.length === 1) return names[0] + ' likes this'
  if (names.length === 2) return names[0] + ' and ' + names[1] + ' like this'
  if (names.length === 3) return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
  if (names.length > 3) {
    var people = names
    var first2 = names.splice(0, 2)
    return first2[0] + ', ' + first2[1] + ' and ' + people.length + ' others like this'
  }
}

// ---- kata solution super smart

function likes (names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ]
  var idx = Math.min(names.length, 4)

  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length
  })
}

console.log(
  likes(['Alex', 'Jacob', 'Mark', 'Max'])
)
