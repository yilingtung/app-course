//map
var numbers = [1, 2, 3];
var doublenumbers = [];

doublenumbers = numbers.map(
  (number) => number * 10
);
console.log(doublenumbers);
//push
doublenumbers.push(40);
console.log(doublenumbers);

//slice
  /*
    arr.slice()
    arr.slice(begin)
    arr.slice(begin, end)
  */
var newDoublenumbers = doublenumbers.slice(1,3);
console.log(newDoublenumbers);

//spread
var array1 = [2, 4, 6];
var array2 = [10, 20, 30];
var array3 = [0, ...array1, ...array2, 100];
array3.push(...[600, 700]);
console.log(array3);

function adder (base, ...numbers) {
	numbers.forEach(function (number) {
		console.log(base + number);
	});
}
adder(3, 5, 7, 1);
//log
//8
//10
//4
