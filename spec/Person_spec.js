const { Person } = require("../src/Person");

let person = new Person('Ryan', 30, 'male', ['being a hardarse',' agile', ' ssd hard drives'])

describe("information of Person", function () {
    it("should have a name called Ryan", function () {
        expect(person.name).toBe('Ryan')
    })
    it("should have an age of 30", function () {
        expect(person.age).toEqual(30)
    })
    it("should be the gender type male", function () {
        expect(person.gender).toBe('male')
    })
    it("should provide the interests of Person", function () {
        expect(person.interests).toContain('being a hardarse','agile', 'ssd hard drives')
    })
    it("should say hello", function() {
        expect(person.hello()).toBe("Hi my name is Ryan, i am 30 years old, my gender is male, my interests are being a hardarse, agile, ssd hard drives")
    })
})