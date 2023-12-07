// const { getAge, getUUID } = require('./plugins');

// export const name: string = 'Roberto';

// console.log(name);

// const templateExports = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');

// const getPokemonById = require('./js-foundation/06-promises');

// const { buildLogger } = require('./plugins');


// import { buildLogger } from './plugins/logger.plugin';

// const logger = buildLogger('app.js');

// logger.log('Hola Mundo');
// logger.error('Esto es algo malo');

// getPokemonById(1)
//     .then(pokemon => console.log({ pokemon }))
//     .catch(error => console.error(error))
//     .finally(() => console.log('Finally...'));


// ! Referencia a la función factory y uso
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = {
//     name: 'Roberto',
//     birthday: '1999-06-15'
// }

// const roberto = makePerson( obj );

// console.log(roberto);