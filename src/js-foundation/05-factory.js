// const { getAge, getUUID } = require('../plugins');

const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthday }) => {
        return {
            id: getUUID(),
            name,
            birthday,
            age: getAge(birthday)
        }
    }
}

// const obj = {
//     name: 'Roberto',
//     birthday: '1999-06-15'
// }

// const roberto = buildPerson(obj);

// console.log(roberto);

module.exports = {
    buildMakePerson
}