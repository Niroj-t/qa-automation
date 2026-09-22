function riskyFetch() {
  return new Promise((_, reject) => {
    reject(new Error('Network failed'));
  });
}
async function safe() {
  try {
    await riskyFetch();
  } catch (err) {
    console.log('Caught: ' + err.message);
  }
}
safe(); 