const {Person} = require("../src/Person");

let person = new Person('Kaleem', 20, 'male', ['Enjoying life', ' being active and fit', ' and learning everyday.'])

describe("information of Person", function(){
    it("should give a name of Person", function(){
        expect(person.name).toBe('Kaleem')
    })
    it("should give the age of Person", function(){
        expect(person.age).toBe(20)
    })
    it("should give the gender of Person", function(){
        expect(person.gender).toBe('male')
    })
    it("should provide the interests of Person", function(){
        expect(person.interests).toContain('Enjoying life', ' being active and fit', ' and learning everyday.')
    })
})