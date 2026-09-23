function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}
function withTimeout(promise, ms) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timed out')), ms);
  });
  return Promise.race([promise, timeoutPromise]);
}
withTimeout(delay(3000, 'data'), 1000)
  .then(result => console.log('Resolved:', result))
  .catch(err => console.log('Rejected:', err.message)); 