function fetchUser(id){
    return new Promise(resolve => {
        setTimeout(() => resolve({id, name: 'User' + id}), 500);
    })
}

async function getUser(){
    const user = await fetchUser(1);
    console.log(user);
}

getUser();