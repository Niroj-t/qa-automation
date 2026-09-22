function getAdults(people){
    return people.filter(p => p.age >= 18);
}

console.log(getAdults([{name:'A',age:20},{name:'B',age:25}]));