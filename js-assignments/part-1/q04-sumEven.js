function sumEven(n){
    let total = 0;
    for(let i=1; i<= n; i++){
        if(i%2 === 0){
            total+=i;
        }
    }
    return total;
}
console.log(sumEven(5));
console.log(sumEven(10));
