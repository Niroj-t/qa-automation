function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(merge({ a: 1, b: 2 }, { b: 9, c: 3 }));