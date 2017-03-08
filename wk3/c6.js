class Holiday {
  constructor(name) {
    this.name = name;
  }
  printHoliday(){
    console.log(`Today is ${this.name}`);
  }
}
var holiday = new Holiday('New Year');
holiday.printHoliday();
