

function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, name, age) {
  return fn.call(this, name, age)
}
