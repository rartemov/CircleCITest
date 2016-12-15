var output=require('./sut')()
console.log(output)
describe('sut', function(){
it('returns hello rita', function(){
expect(output).toBe('hello rita')
})
})