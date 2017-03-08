let noise = function(fn) {
  fn();
};
let pikachu = {
  voice1: 'PiKa~~',
  voice2: 'Pi~~',
  makeSounds: function(){
    console.log(`Pikachu: ${this.voice1} ${this.voice2}`);
  },
  makeNoise: function(){
    noise(this.makeSounds.bind(this));
  },
  sayHello: function(){
    noise(
      () => console.log(`Pikachu: ${this.voice1} ${this.voice1}`)
    );
  }
};
pikachu.makeNoise();
pikachu.sayHello();
