function morning(fn){
  console.log('Good morning!');
  var data = {
    name: 'Tom'
  };
  fn(data);
}

morning(data => {
  console.log('The callback was invoked!');
	console.log(data);
});

morning(data => {
  console.log('A different callback was invoked!');
	console.log(data.name);
});
