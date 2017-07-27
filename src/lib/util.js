let each = function (obj, cb) {
  if (!obj || typeof obj !== 'object' || typeof cb !== 'function') {
    return
  }
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (cb(k, obj[k]) === false) {
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

let redefine = function (target, key, obj) {
  let obj0 = target.prototype[key] || {}
  each(obj, function (k) {
    obj0[k] = obj[k]
  })
  Object.defineProperty(target.prototype, key, {
    get () {
      return obj0
    },
    configurable: true
  })
}

export default {
  each,
  isEmpty,
  redefine
}
