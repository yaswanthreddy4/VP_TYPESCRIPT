var Motor2 = /** @class */ (function () {
    function Motor2(name, type, wheels, cost, company, speed) {
        this.name = name;
        this.type = type;
        this.wheels = wheels;
        this.cost = cost;
        this.company = company;
        this.speed = speed;
    }
    Motor2.prototype.showMotor = function () {
        console.log('this is hitech motor');
        console.log("motor details:\n         name: " + this.name + "\n          type: " + this.type + "\n           wheels: " + this.wheels + "\n            cost: " + this.cost + "\n            company: " + this.company + "\n            speed: " + this.speed + "\n         ");
    };
    Motor2.prototype.speedCheck = function () {
        return this.speed + "kmph";
    };
    Motor2.prototype.speedCheck2 = function () {
        return motor2.speedCheck();
    };
    return Motor2;
}());
var motor2 = new Motor2("yamaha", "rx100", 25502, 2, "yamaha", "56");
motor2.showMotor();
var abc = motor2.speedCheck2();
console.log(abc);
