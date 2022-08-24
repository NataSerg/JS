var arr = [];
while(arr.length < 100){
var r = Math.floor(Math.random() * 100) + 1;
if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

function everyNumberIsBigger(arr) {
    let someNumber = +prompt('Write your number 1');
    console.log(arr.every(function(r) {
        return r >= someNumber
    }))
}

everyNumberIsBigger(arr);

function someNumberIsBigger(arr) {
    let someNumber = +prompt('Write your number 2');
    console.log(arr.some(function (r) {
        return r >= someNumber
    }))
}

someNumberIsBigger(arr);

function devideNumbers(arr) {
    let someNumber = +prompt('Write your number 3'); 
    console.log(arr.filter(function (r) {
         return r % someNumber === 0
    }))
}

devideNumbers(arr);

function returnOdd(arr) {
    arr.forEach(function (r, item) {
        if (r % 2 === 0) {
            arr[item] = -1;
        }
    })
    console.log(arr);
    return arr;
}

returnOdd(arr);

