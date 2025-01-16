class Person {

    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName(): string {
        return (this.firstName + ' ' + this.lastName);
    }
}    

const person = new Person("Rafi", "Dzakwan");
console.log(person.getFullName());



