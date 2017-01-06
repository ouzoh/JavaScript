
var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  // Only change code below this line.
  
  //create a private property called grear
  var gear = 5;
  
  //create a public methods called getGear and setGear
  this.setGear = function(change){
    gear=change;
  };
  this.getGear = function(){
    return gear;
    
  };

};

var myCar = new Car();

var myBike = new Bike();

myBike.setGear(4);
