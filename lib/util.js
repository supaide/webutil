let each = function (obj, cb) {
  if (!obj || typeof obj !== 'object' || typeof cb !== 'function') {
    return
  }
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (callback(k, obj[k]) === false) {
        return
      }
    }
  }
}

let isEmpty = function (obj) {
  if (obj === null || obj === undefined) {
    return true
  }
  if (typeof obj === 'string') {
    return obj.length < 1 
  }
  if (typeof obj !== 'object') {
    let len = 0
    obj.each(function () {
      len++
    })
    return len < 1
  }
  return false
}

export default {
  each,
  isEmpty
}
