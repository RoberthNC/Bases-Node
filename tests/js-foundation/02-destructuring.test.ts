import { superheros } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring.ts', ()=>{
    it('characters should contain Flash, Superman', ()=>{
        expect(superheros).toContain('Flash');
        expect(superheros).toContain('Batman');
    });

    it('first character should be Flash', ()=>{
        const [ flash, , superman ] = superheros;
        expect(flash).toBe('Flash');
    });

    it('third character should be Superman', ()=>{
        const [ flash, , superman ] = superheros;
        expect(superman).toBe('Superman');
    });
});