                                                                                                                                                                                                                                                       0// Code your solutions in this file
let writeCards = (arr) => {
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        newArr[i] = `Thank you, ${arr[i]}, for the wonderful surprise gift!`
    }
    return newArr
}

let countDown = (num) => {
    for(let i = num; i >= 0; i--){
        console.log(i)
    }
}

console.log(countDown())