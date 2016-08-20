// 1. public property for holding the last modified date
// 2. getter/setter for planets 
// 3. getter/setter for activeSpacecraft
// 4. getter/setter for planetsLandedON
var SolarSystem = (function(){
	var planets = ["mercury"];
	var activeSpacecraft = ["Voyager I"];
	var planetsLandedON = 0;
		
	return {
		lastModifiedDate: new Date(),
		getPlanets: function(){
			return planets;
		},
		setPlanets: function(planet) {
			planets.push(planet);
		},
		getActiveSpacecraft: function(){
			return activeSpacecraft;
		},	
		setActiveSpacecraft: function(spacecraft) {
			activeSpacecraft.push(newSpacecraft);
		},
		getPlanetLandedOn: function(){
			return planetsLandedON;
		},
		setPlanetLandedOn: function(newStatus) {
			planetsLandedON = newStatus;
		}

	}
})();