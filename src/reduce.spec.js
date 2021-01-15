const reduce = require('./reduce.js')

describe('reduce', () => {
    it('Reduce of ([],(x,y)=>x+y) should return undefined', function () {
        expect(reduce([], (x, y) => x + y)).toBeUndefined();
    });
    it('Reduce of ([],v(x,y)=>x+y,10) should return 10', function () {
        expect(reduce([], (x, y) => x + y, 10)).toEqual(10);
    });
    it('Reduce of ([a,b,c], (x, y) => x + y) should return abc', function () {
        expect(reduce(['a', 'b', 'c'], (x, y) => x + y)).toEqual('abc');
    });
    it('Reduce of ([],(x,y)=>x+y) should return zabc', function () {
        expect(reduce(['a', 'b', 'c'], (x, y) => x + y, 'z')).toEqual('zabc');
    });
})