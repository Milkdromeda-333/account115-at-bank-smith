const account115 = {
	firstName: "Roberta",
	lastName: "Cortez",
	securityNumber: 50014851257,
	pin: 000,
	birthday: "Feb 31 2055",
	balance: 3000000.05,
	credit(num) {
		this.balance += num
	},
	describe() {
		console.log(`Owner ${this.firstName + " " + this.lastName}'s account balance is ${this.balance} and the security number is ${this.securityNumber}.'`)
	}
}

account115.credit(50.50);

account115.describe();

account115.credit(-80000);

account115.describe();
