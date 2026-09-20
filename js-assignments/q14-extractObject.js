function describe(user){
    const {name, email} = user;
    console.log(`${name} can be reached at ${email}`);
}
const u = { name: 'Sara', email: 's@x.com', age: 30 };
describe(u);