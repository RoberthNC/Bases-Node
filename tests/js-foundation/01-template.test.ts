import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template.ts', ()=>{
    it('emailTemplate should contain a message', ()=>{
        expect(emailTemplate).toContain('Hi, ');
    });
    it('emailTemplate should contain {{ name }}', ()=>{
        expect(emailTemplate).toContain('{{ name }}');
    });
});