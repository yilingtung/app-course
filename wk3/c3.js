// Your Javascript Code Goes Here
var address = {
	Street: 'Zero',
	Number: 123,
	Apartment: {
		Floor: 4,
		Number: 567
	}
};
var person = {
	firstname: 'Jay',
	lastname: 'Chou',
	greet: function() {
		console.log(`Hello, ${this.firstname} ${this.lastname}`);
	}
};
person.greet();
console.log(person['firstname']);
