describe('Head',() => {
    it('Head of [1,2,3] is 1',() => {
        expect(head([1,2,3])).toEqual(1);
    })

    it('Head of [] is null or undefined',() => {
        expect(head([])).toEqual(undefined);
    })
})