var pokemonObj = {
	name: "Pikachu",
	level: 100,
	gotcha: true,
	hasSkill: null,
	food: [{
		fruit: "Apple"
	}, {
		HP: "20"
	}]
};
var pokemonJson = JSON.stringify(pokemonObj);
console.log(pokemonObj);
console.log(pokemonJson);
