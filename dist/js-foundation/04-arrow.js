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
const getUserById = (id, callback) => {
    const user = users.find(u => u.id === id);
    if (!user) {
        callback(`User with id ${id} doesn't exists`);
    }
    return callback(undefined, user);
};
exports.getUserById = getUserById;
