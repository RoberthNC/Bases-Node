"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: 'John Done'
    },
    {
        id: 2,
        name: 'Jane Done'
    }
];
function getUserById(id, callback) {
    const user = users.find(u => u.id === id);
    if (!user) {
        setTimeout(() => {
            callback(`User with id ${id} doesn't exists`);
        }, 2500);
        return;
    }
    return callback(undefined, user);
}
exports.getUserById = getUserById;
