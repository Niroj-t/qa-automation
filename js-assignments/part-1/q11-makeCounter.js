function makeCounter(){
    let count = 0;
    return function(){
        count++;
        return count;

    }
}

const next = makeCounter();
console.log(next());
console.log(next());
console.log(next());
console.log(next());
