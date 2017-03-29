function formatDuration (seconds) {
  if (seconds === 0) return 'now'
  var times = ['years', 'days', 'hours', 'minutes', 'seconds']

  var converted = []
  // minutes
  converted.push(seconds % 60)
  seconds = Math.floor(seconds / 60)
  // hours
  converted.push(seconds % 60)
  seconds = Math.floor(seconds / 60)
  // days
  converted.push(seconds % 24)
  seconds = Math.floor(seconds / 24)
  // years
  converted.push(seconds % 365)
  seconds = Math.floor(seconds / 365)
  converted.push(seconds)

  converted.reverse()
  console.log(converted)

  var time = []

  converted.map(function (val, ind) {
    if (val !== 0) {
      if (val === 1) {
        time.push([val, times[ind].slice(0, -1)])
      } else {
        time.push([val, times[ind]])
      }
    }
  })

  time = time.map(function (val) {
    return val.join(' ')
  })

  var result = ''

  for (var i = 0; i < time.length; i++) {
    if ((i !== time.length - 2) && (i !== time.length - 1)) {
      result += time[i] + ', '
    }
    if (i === time.length - 2) result += time[i] + ' and '
    if (i === time.length - 1) result += time[i]
  }
  console.log(result)
}

formatDuration(3662)
