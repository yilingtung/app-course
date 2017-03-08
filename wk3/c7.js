'use strict'

class Today {
  constructor(date) {
    this.date = date;
  }
  printToday(){
    console.log(`Today is ${this.date}`);
  }
}
var day = new Today('3/8');
day.printToday();

class Holiday extends Today {
  constructor(date, holiday) {
    super(date);
    this.holiday = holiday;
  }
  printToday(){
    console.log(`Today is ${this.date} and happy ${this.holiday}!`);
  }
}

var day2 = new Holiday('12/25','X\'mas');
day2.printToday();

Today.prototype.printToday = function() {
	console.log(`Today is ${this.date}! Nice!`);
}
day.printToday();
day2.printToday();
