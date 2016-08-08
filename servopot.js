var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

   var slider = new five.Sensor("A0");
   freq: 255
   var servo = new five.Servo(9);



  // "data" get the current reading from the potentiometer
   slider.scale([0, 255]).on("data", function() {
    servo.to(this.value);

    servo.sweep();
  });
 

    // The slider's value will be scaled to match the tilt servo range
    
  });

