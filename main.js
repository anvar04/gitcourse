const counter = () => {

    let count = 1;

    return function () {
        return count++
    }

}

let counter1 = counter()

console.log(counter1())


console.log('asdasd');
