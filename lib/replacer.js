const REG = {
  SUGAR_DATA: /__data\(['"]([a-zA-Z-_.]+)["']\)/g,
}
module.exports.REG = REG

module.exports.dataRender = function (cnt, data) {
  if (typeof cnt === 'string') {
    return cnt.replace(REG.SUGAR_DATA, (str, $1) => {
      const keys = $1.split('.')
      let point = data
      keys.forEach((key) => {
        if (!point) {
          return
        }
        if (point[key]) {
          point = point[key]
        } else if (point[key] === false) {
          point = 'false'
        } else {
          point = ''
        }
      })
      return point || ''
    })
  } else {
    throw 'cnt must be string'
  }
}
