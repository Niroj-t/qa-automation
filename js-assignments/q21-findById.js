function findById(users, id){
    return users.find(u => u.id === id);

}

console.log(findById([{id:1},{id:2}], 2));
console.log(findById([{ id: 1 }, { id: 2 }], 9));