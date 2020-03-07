// create a constructor function
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function() {
    alert("Cleaning in progress...");
  }
}

var houseKeeper1 = new HouseKeeper(12, "Bruce", ["lobby, bedroom"]);
var houseKeeper2 = new HouseKeeper(13, "Clark", ["kitchen", "bathroom"]);
