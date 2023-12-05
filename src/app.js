const { getAge, getUUID } = require('./plugins');

// const templateExports = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');

const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(1)
    .then(pokemon => console.log({ pokemon }))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally...'));


// ! Referencia a la función factory y uso
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = {
//     name: 'Roberto',
//     birthday: '1999-06-15'
// }

// const roberto = makePerson( obj );

// console.log(roberto);