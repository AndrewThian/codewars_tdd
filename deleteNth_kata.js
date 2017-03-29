// function deleteNth (arr, x) {
//   var result = []
//   var object = arr.reduce(function (obj, current) {
//     obj[current] = obj[current] || 0
//     obj[current] += 1
//     return obj
//   }, {})
//   for (var ele in object) {
//     if (object[ele] > x) object[ele] = x
//   }
//   for (var ele in object) {
//     for (var i = 0; i < object[ele]; i++) {
//       result.push(parseInt(ele))
//     }
//   }
//   return result
// }

// -------- kata solution super smart

function deleteNth (arr, x) {
  var cache = {}
  return arr.filter(function (n) {
    // console.log(n)
    // console.log(cache, cache[n])
    cache[n] = cache[n] || 0
    cache[n] += 1
    // console.log(cache, cache[n])
    return cache[n] <= x
  })
}

console.log(
  deleteNth([20, 37, 20, 21], 3)
)
