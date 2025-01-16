var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return (this.firstName + ' ' + this.lastName);
    };
    return Person;
}());
var person = new Person("Rafi", "Dzakwan");
console.log(person.getFullName());
