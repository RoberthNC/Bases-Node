import { getUUID } from '../../src/plugins/get-uuid.plugin';

describe('plugins/get-uuid.plugin.ts', ()=>{
    
    test('getUUID() should return a UUID', ()=>{
        const uuid = getUUID();
        expect(typeof uuid).toBe('string');
    });

    test('getUUID() should return a string with a length of 36', ()=>{
        const uuid = getUUID();
        expect(uuid.length).toBe(36);
    });

});