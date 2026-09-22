// Predicted order: A, D, C, B
// Sync code (A, D) runs first. Then microtasks (Promise -> C)
// run before macrotasks (setTimeout -> B).

console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');