var Motor3 = /** @class */ (function () {
    function Motor3(name, type, wheels, cost, company, speed) {
        this.name = name;
        this.type = type;
        this.wheels = wheels;
        this.cost = cost;
        this.company = company;
        this.speed = speed;
    }
    return Motor3;
}());
var motor3 = new Motor3("yamaha", "rx100", 25502, 2, "yamaha", "56");
// motor3.showMotor();
// let speedCheck2 = motor3.speedCheck();
// console.log(speedCheck2);
console.log(motor3);
