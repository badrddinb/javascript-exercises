const removeFromArray = function(randomArray, ...values) {
    for (let i = 0; i < values.length; i++) {
        let index = randomArray.indexOf(values[i])
        if (index > -1) randomArray.splice(index, 1)
    }
    return randomArray
}

removeFromArray([1, 2, 3, 4], 3)
removeFromArray([1, 2, 3, 4], 3, 2)
removeFromArray([1, 2, 3, 4], 7, "tacos")
removeFromArray([1, 2, 3, 4], 7, 2)
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)
removeFromArray(["hey", 2, 3, "ho"], "hey", 3)
removeFromArray([1, 2, 3], "1", 3)

module.exports = removeFromArray
