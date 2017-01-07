describe('some object', function() {
    it('does something', function() {
        var valueBetween1And0 = Math.random()
        expect(valueBetween1And0).toBeLessThan(0.99);
    })
})