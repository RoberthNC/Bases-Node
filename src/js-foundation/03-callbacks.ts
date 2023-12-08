interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {
        id:1,
        name:'John Done'
    },
    {
        id:2,
        name:'Jane Done'
    }
];

export function getUserById(id: number, callback: (err?: string, user?: User) => void){
    const user = users.find(u => u.id === id);
    if(!user){
        setTimeout(()=>{
            callback(`User with id ${id} doesn't exists`);
        }, 2500);
        return;
    }
    return callback(undefined, user);
}