function greet(){
	console.log('yo');
}
greet();

function logGreeting(fn){
	fn();
}
logGreeting(greet);

var greetMe = function() {
	console.log('How do you do!');
}
greetMe();

logGreeting(greetMe);

logGreeting(function() {
	console.log('Hay!');
});
