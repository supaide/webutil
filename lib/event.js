let listener = {}
export default {
  on (type, callback, target) {
    if (!listener[type]) {
      listener[type] = []
    }
    if (target) {
      listener[type].push(function (...data) {
        callback.apply(target, data)
      })
    } else {
      listener[type].push(callback)
    }
  },

  off (type) {
    delete listener[type]
  },

  emit (type, ...data) {
    if (!listener[type]) {
      return
    }
    for (let i=0; i<listener[type].length; i++) {
      listener[type][i].apply({}, data)
    }
  }
}
