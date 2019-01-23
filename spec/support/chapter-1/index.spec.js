const TEMPLATE = require('../../../src/chapter-1');

describe('TEMPLATE', function() {
   it('should return the template when no argument', function() {
       const expected = TEMPLATE.parse("Hello {first_name}");

       expect(expected).toEqual('Hello {first_name}');
   });

   it('should return first_name', function() {
        const expected = TEMPLATE.parse("Hello {first_name}", {
            first_name: 'Li Ren'
        });

        expect(expected).toEqual('Hello Li Ren');
    });

    it('should return country', function() {
        const expected = TEMPLATE.parse("Hello {country}", {
            country: 'Singapore'
        });

        expect(expected).toEqual('Hello Singapore');
    });

    it('should return more than two variables', function() {
        const expected = TEMPLATE.parse("Hello {first_name}, welcome to {country}", {
            country: 'Singapore',
            first_name: 'Ken'
        });

        expect(expected).toEqual('Hello Ken, welcome to Singapore');
    });
});

