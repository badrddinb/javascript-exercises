const ftoc = function(f) {
  let c = Number((((f - 32) * 5) / 9).toFixed(1))
  return c
  
}

const ctof = function(c) {
  let f = Number((((c / 5) * 9) + 32).toFixed(1))
  return f
}

ftoc(32)
ftoc(100)
ftoc(-100)

ctof(73.2)
ctof(0)
ctof(-10)

module.exports = {
  ftoc,
  ctof
}
