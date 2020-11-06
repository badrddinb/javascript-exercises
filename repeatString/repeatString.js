const repeatString = function(stringMsg, times) {
    if (times < 0) return 'ERROR'
    let msg = ''
    for (let i = 0; i < times; i++) {
        msg += stringMsg
    }
    return msg
}
repeatString('hey', 3)
repeatString('hey', 10)
repeatString('hey', 1)
repeatString('hey', 0)
repeatString('hey', -1)
repeatString('', 10)

module.exports = repeatString
