const sumAll = function(val1, val2) {
    if (val1 < 0 || typeof(val1) !== 'number') return 'ERROR'
    if (val2 < 0 || typeof(val2) !== 'number') return 'ERROR'

    let max = val1
    let min = val1
    if (val2 > val1) max = val2
    if (val2 < val1) min = val2

    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i
    }

    return sum
}

sumAll(1, 4)
sumAll(1, 4000)
sumAll(123, 1)
sumAll(-10, 4)
sumAll(10, "90")
sumAll(10, [90, 1])

module.exports = sumAll
