var Motor = /** @class */ (function () {
    function Motor(name, type, wheels, cost, company, speed) {
        this.name = name;
        this.type = type;
        this.wheels = wheels;
        this.cost = cost;
        this.company = company;
        this.speed = speed;
    }
    Motor.prototype.showMotor = function () {
        console.log('this is hitech motor');
        console.log("motor details:\n         name: " + this.name + "\n          type: " + this.type + "\n           wheels: " + this.wheels + "\n            cost: " + this.cost + "\n            company: " + this.company + "\n            speed: " + this.speed + "\n         ");
    };
    Motor.prototype.speedCheck = function () {
        return this.speed + "kmph";
    };
    return Motor;
}());
var motor = new Motor("yamaha", "rx100", 25502, 2, "yamaha", "56");
motor.showMotor();
var speedCheck = motor.speedCheck();
console.log(speedCheck);
