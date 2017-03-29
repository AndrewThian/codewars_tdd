// function findUniq(arr) {
//   var unique
//   for (var i = 1; i < arr.length; i++) {
//     if ((arr[0] !== arr[1]) && (arr[2] === arr[1])) {
//       unique = arr[0]
//       break
//     }
//     if (arr[i - 1] !== arr[i]) {
//       unique = arr[i]
//       break
//     }
//   }
//   return unique
// }

// --- kata solution (super smart)

// if first 2 elements are equal means the last two are not

function findUniq (arr) {
  arr.sort((a, b) => a - b)
  return arr[0] == arr[1] ? arr.pop() : arr[0]
}

console.log(findUniq([1, -1, 1, 1, 1]))
