class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

Person.prototype.getX = function () {
    return 'X Factor';
}


class SuperMan extends Person {
    constructor(fname, lname) {
        super(fname, lname);
        this.superMan = true;
    }
}


const s1 = new SuperMan('Shaktiman', 'Singh');

console.log({ s1 });
console.log({ name: s1.getFullName() });






const p1 = new Person('Anuranjan', 'Srivastav');

console.log(p1);

console.log(p1.getFullName());

console.log(p1.getX());


const url = 'www.xyg.com';
const getParameters = (URL) => {
    const jsonedParameters = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    return jsonedParameters;
};


console.log(getParameters(url).body);


