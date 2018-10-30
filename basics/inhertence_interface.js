var Hadoop = /** @class */ (function () {
    function Hadoop() {
    }
    return Hadoop;
}());
var hadoop = new Hadoop();
hadoop.courseName = "hadoop";
hadoop.price = 255000;
hadoop.timings = "9-8PM";
hadoop.duration = "5DAYS";
hadoop.duration = "6Months";
hadoop.location = "NOIDA";
hadoop.trainer = "RAM";
hadoop.content = "LOL,BOL,KOL";
hadoop.material = "YES";
hadoop.futureScope = "YES";
console.log(hadoop);
var TABULE = /** @class */ (function () {
    function TABULE() {
    }
    TABULE.prototype.Discount = function () {
        return this.discount;
    };
    Object.defineProperty(TABULE.prototype, "SetDiscount", {
        set: function (amt) {
            this.discount = amt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TABULE.prototype, "SetTrainer", {
        set: function (trainerName) {
            this.trainer = trainerName;
        },
        enumerable: true,
        configurable: true
    });
    return TABULE;
}());
var tabule = new TABULE();
tabule.courseName = "tabule";
tabule.price = 2500;
tabule.timings = "5-6AM";
tabule.duration = "45DAYS";
tabule.location = "MUMBAI";
tabule.SetDiscount = 50;
tabule.SetTrainer = "Lala";
tabule.content = "GIT,CHEF,JENKINS";
tabule.material = "YES";
tabule.futureScope = "YES";
console.log(tabule);
