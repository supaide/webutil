if (!String.prototype.trim) {
  String.prototype.trim = function (str) {
    return str == null ? '' : (str + '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }
}

String.prototype.truncate = function (len, padding) {
  let str = this
  if (!padding) {
    padding = '...'
  }
  if (len < padding.length) {
    return ''
  }
  len -= padding.length
  let c, l=1, len0 = 0, stopInd = -1, leftLen = 0
  for (let i=0; i<str.length; i++) {
    c = str[i].charCodeAt()
    if (c <= 127) {
      l = 1
    } else {
      l = 2
    }
    len0 += l
    if (len0 > len) {
      leftLen += l
    } else {
      stopInd = i
    }
  }
  if (stopInd < 0) {
    return ''
  }
  if (leftLen <= padding.length) {
    return str
  } else {
    return str.substr(0, stopInd+1) + padding
  }
}

export default String
