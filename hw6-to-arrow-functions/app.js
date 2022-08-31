const arr = [];
while(arr.length < 100){
let r = Math.floor(Math.random() * 100) + 1;
if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);


const everyNumberIsBigger = arr => {
    let someNumber = +prompt('Write your number 1');
    if (isNaN(someNumber)) { return false };
    return arr.every(r => {
        return r >= someNumber;
    });
    
};

everyNumberIsBigger(arr);

const someNumberIsBigger = arr => {
    let someNumber = +prompt('Write your number 2');
    if (isNaN(someNumber)) { return false };
    return arr.some(r => {
        return r >= someNumber
    });
};

someNumberIsBigger(arr);

const devideNumbers = arr => {
    let someNumber = +prompt('Write your number 3');
    if (isNaN(someNumber)) { return false };
    return arr.filter(r => {
        return r % someNumber === 0
    });
};

devideNumbers(arr);

const returnOdd = arr => {
    return arr.forEach((r, index) => {
        if (r % 2 === 0) {
            arr[index] = -1;
        }
    });
    
};

returnOdd(arr);

const sortArr = arr => {
    for (let key of arr) {
        for (let item = 0; item < arr.length - 1; item++) {
            if (arr[item] > arr[item + 1]) {
                let buffer = arr[item];
                arr[item] = arr[item + 1];
                arr[item + 1] = buffer;
            }
        }
    };
};

sortArr(arr);

