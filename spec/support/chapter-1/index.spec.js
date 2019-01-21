const FUNCTION = require('../../../src/chapter-1');

describe('FUNCTION', function() {
   it('should return 1', function() {
       const expected = FUNCTION.getOne();

       expect(expected).toEqual(1);
   });
});

