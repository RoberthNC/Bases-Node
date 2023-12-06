import { getUUID } from '../plugins/get-uuid.plugin';
import { getAge } from '../plugins/get-age.plugin';
// const { getAge, getUUID } = require('../plugins');

interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthday: string) => number;
}

interface PersonOptions {
    name: string;
    birthday: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {
    return ({ name, birthday }: PersonOptions) => {
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