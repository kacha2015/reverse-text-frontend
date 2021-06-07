import { getReverseText } from "../services/getReverseText";

describe('All test about return API', () => {

    test('should not return no text like value', () => {

        const invputValue = '';
        getReverseText(invputValue).
        then( ({ text }) => {
            expect(text).not.toBe('no text');
        });
        
    });

})
