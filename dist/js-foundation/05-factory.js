"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthday }) => {
        return {
            id: getUUID(),
            name,
            birthday,
            age: getAge(birthday)
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = {
//     name: 'Roberto',
//     birthday: '1999-06-15'
// }
// const roberto = buildPerson(obj);
// console.log(roberto);
