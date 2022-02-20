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


const url = 'app://ePayment?body=%7B%22reason_code%22:%22100%22,%22auth_time%22:%222022-02-14T052640Z%22,%22req_card_type%22:%22001%22,%22auth_response%22:%2200%22,%22req_card_number%22:%22400000xxxxxx0002%22,%22req_card_expiry_date%22:%2204-2022%22,%22decision%22:%22ACCEPT%22,%22transaction_id%22:%226448164003636573304002%22%7D&encodedBody=eyJyZWFzb25fY29kZSI6IjEwMCIsImF1dGhfdGltZSI6IjIwMjItMDItMTRUMDUyNjQwWiIsInJlcV9jYXJkX3R5cGUiOiIwMDEiLCJhdXRoX3Jlc3BvbnNlIjoiMDAiLCJyZXFfY2FyZF9udW1iZXIiOiI0MDAwMDB4eHh4eHgwMDAyIiwicmVxX2NhcmRfZXhwaXJ5X2RhdGUiOiIwNC0yMDIyIiwiZGVjaXNpb24iOiJBQ0NFUFQiLCJ0cmFuc2FjdGlvbl9pZCI6IjY0NDgxNjQwMDM2MzY1NzMzMDQwMDIifQ--';
const getParameters = (URL) => {
    const jsonedParameters = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    return jsonedParameters;
};


console.log(getParameters(url).body);


