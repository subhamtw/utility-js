const map = require('./map');

const cube = (value) => {
    return value * value * value;
}
const identity = (value) => {
    return value;
}
describe('map', () => {
    it('Testing cube functionality for [] should return []', () => {
        expect(map([], cube)).toEqual([]);
    });

    it('Testing identity functionality for [1,2,3] should return [1,2,3]', () => {
        expect(map([1, 2, 3], identity)).toEqual([1, 2, 3]);
    });

    it('Testing cube functionality for [1,2,3] should return [1,8,27]', function () {
        expect(map([1,2,3],cube())).toEqual([1,8,27]);
    });

    it('Testing some increment for someObject should return 11', () => {
        expect(map([{x : 10}], someObject=>someObject.x+1)).toEqual([11]);
    });
})