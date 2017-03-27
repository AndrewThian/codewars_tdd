function test () {
  return 'Test function running'
}

function domainName (url) {
  url = url.replace('https://', '')
  url = url.replace('http://', '')
  url = url.replace('www.', '')
  return url.split('.')[0]
}

module.exports = {
  test: test,
  domainName: domainName
}
