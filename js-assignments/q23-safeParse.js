function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    return null;
  } finally {
    console.log('done');
  }
}
console.log(safeParse('{"a":1}'));  
console.log(safeParse('not json'));