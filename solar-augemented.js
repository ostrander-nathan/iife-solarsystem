// 1. getter/setter for closest stars to the sun
// 2. getter/setter for age of solar system
// 3. getter/setter for known dwarf planets

var SolarSystem = (function(newSolarSystem){
	var closestStars = ["Alpha Centauri"];
	var ageOfSolarSystem = 0;
	var dwarfPlanets = ["Pluto"];

	newSolarSystem.setClose = function(newCloseStar){
		closestStars.push(newCloseStar);
	}

	newSolarSystem.getClose = function(){
		return closestStars;
	}

	newSolarSystem.setAge = function(newAge){
		ageOfSolarSystem = newAge;
	}
	newSolarSystem.getAge = function(){
		return ageOfSystem;
	}

	newSolarSystem.setDwarf = function(newDwarf){
		dwarfPlanets.push(newDwarf);

	}
	newSolarSystem.getDwarf = function(){
		return dwarfPlanets;
	}

	newSolarSystem.gretting = "WORKING";

	return newSolarSystem;

})(SolarSystem || {});