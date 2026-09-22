function totalPrice(items){
    return items.reduce((sum, item) => sum + item,0);
}

console.log(totalPrice([2,4,6,8]));