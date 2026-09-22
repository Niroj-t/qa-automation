function findMax(arr){
    let max = arr[0];
    for(let i=0; i<=arr.length;i++){
        if(arr[i] > max){
            max=arr[i];
        }
    }
    return max;

}
console.log(findMax([1,5,7,3]));
console.log(findMax([290,145,89,250]));