var Company = /** @class */ (function () {
    function Company() {
    }
    Object.defineProperty(Company.prototype, "Income1", {
        get: function () {
            return this.income;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "Income2", {
        set: function (income) {
            this.income = income;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "Coustmer1", {
        get: function () {
            return this.coustmer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "Custmer2", {
        set: function (coustmer) {
            this.coustmer = coustmer;
        },
        enumerable: true,
        configurable: true
    });
    return Company;
}());
var company = new Company();
company.name = "yas";
company.size = 5;
company.Income2 = 2500000;
company.Custmer2 = {
    name: "laacoustmer laaa",
    emailId: "lala@gmail.com"
};
var income_get = company.Income1;
console.log(income_get);
var custmer_get = company.Coustmer1;
console.log(custmer_get);
