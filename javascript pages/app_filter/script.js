
/** 
filter() is a method used to create a new array with elements 
that have the same properties from an existing array:

the syntax
==========

var newArray = array.filter(function(item) {
  return condition;
});

example
=======
var heroes = [
	{name: “Batman”, franchise: “DC”},
	{name: “Ironman”, franchise: “Marvel”},
	{name: “Thor”, franchise: “Marvel”},
	{name: “Superman”, franchise: “DC”}
];

var marvelHeroes =  heroes.filter(function(hero) {
	return hero.franchise == “Marvel”;
});

// [ {name: “Ironman”, franchise: “Marvel”}, {name: “Thor”, franchise: “Marvel”} ]

*/