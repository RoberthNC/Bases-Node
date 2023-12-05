const users = [
    {
        id:1,
        name:'John Done'
    },
    {
        id:2,
        name:'Jane Done'
    }
];

const getUserById = (id, callback) =>{
    const user = users.find(u => u.id === id);
    if(!user){
        callback(new Error(`User with id ${id} doesn't exists`), null);
    }
    return callback(null, user);
}

module.exports = {
    getUserById
}