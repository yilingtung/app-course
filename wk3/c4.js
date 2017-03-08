// Your Javascript Code Goes Here
(function(){console.log(this)})();//log Windows

let pikachu = {
	greet: 'pikapika',
	pika1: function(){
		console.log(this);
	},
	pika2: ()=>{
		console.log(this);
	},
	pika3: function(){
		(() => console.log(this))();
	}
};
pikachu.pika1();//log Object
pikachu.pika2();//log Windows
pikachu.pika3();//log Object
