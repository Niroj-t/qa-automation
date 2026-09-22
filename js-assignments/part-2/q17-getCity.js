function getCity(user){
    return user?.address?. city ?? 'unknown';
}

console.log(getCity({ address: { city: 'kathmandu' }}));
console.log(getCity({}));