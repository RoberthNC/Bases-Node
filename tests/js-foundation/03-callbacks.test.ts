import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks.ts', ()=>{
    test('getUserById should return an error if user doesnt exists', (done)=>{
        const id = 10;
        getUserById(id, (error, user)=>{
            expect(error).toBe(`User with id ${id} doesn't exists`);
            expect(user).toBeUndefined();
            done();
        });
    });
    test('getUserById should return the hero', (done)=>{
        const id = 1;
        getUserById(id, (error, user)=>{
            expect(error).toBeUndefined();
            expect(user).toEqual({ id:1, name:'John Done' });
            done();
        });
    });
});