function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: 'User' + id }), 500);
  });
}
async function loadAll() {
  return await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);
}
loadAll().then(users => console.log(users));