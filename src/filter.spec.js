const filter = require('./filter.js')

const filterUpperCase = (value) => {
    return value === value.toUpperCase();
}

describe('Filter',() => {
    it('Filter of ([], x => true) should return []', () => {
        expect(filter([],x => true)).toEqual([]);
    })
    it('Filter of ([1,2,3],x => true) should return [1,2,3]',() => {
        expect(filter([1,2,3],x => true)).toEqual([1,2,3]);
    })
    it('Filter of ([1,2,3],x => false) should return []',() => {
        expect(filter([1,2,3],x => false)).toEqual([]);
    })
    it('Filter of ([1,2,3],x => x > 1) should return [2,3]',() => {
        expect(filter([1,2,3],x => x > 1)).toEqual([2,3]);
    })
    it('Filter of ([a,B,c,D], filterUpperCase) should return [B,D]',() => {
        expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B','D']);
    })
})