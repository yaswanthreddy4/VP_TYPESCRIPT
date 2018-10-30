var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Courses = /** @class */ (function () {
    function Courses(courseName, price, timings, duration, location, discount) {
        this.courseName = courseName;
        this.price = price;
        this.timings = timings;
        this.duration = duration;
        this.location = location;
        this.discount = discount;
    }
    return Courses;
}());
//construtor data changes dynamically
// let aws = new Course("AWS", 20000, "YASWANTH", "7-9AM", "60DAYS")
// console.log(aws);
var AwsCourse = /** @class */ (function (_super) {
    __extends(AwsCourse, _super);
    function AwsCourse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwsCourse.prototype.Discount = function () {
        return this.discount;
    };
    return AwsCourse;
}(Courses));
var aws = new AwsCourse("AWS", 25000, "7-9AM", "3 MONTHS", "HYD", 25);
aws.trainer = "Yas";
aws.content = "EC2,LB,S3";
aws.material = "YES";
aws.futureScope = "YES";
console.log(aws);
var Devops = /** @class */ (function (_super) {
    __extends(Devops, _super);
    function Devops() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Devops.prototype.Discount = function () {
        return this.discount;
    };
    Object.defineProperty(Devops.prototype, "SetDiscount", {
        set: function (amt) {
            this.discount = amt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Devops.prototype, "SetTrainer", {
        set: function (trainerName) {
            this.trainer = trainerName;
        },
        enumerable: true,
        configurable: true
    });
    return Devops;
}(Courses));
var devops = new Devops("DEVOPS", 50000, "5-9PM", "2 MONTHS", "BAN");
devops.SetDiscount = 50;
devops.SetTrainer = "Lala";
devops.content = "GIT,CHEF,JENKINS";
devops.material = "YES";
devops.futureScope = "YES";
console.log(devops);
