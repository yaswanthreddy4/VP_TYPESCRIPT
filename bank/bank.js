// var record: any = [{
//     name: "yaswanth",
//     accountNumber: "6566464654",
//     accountBalance: "50000",
//     emailId: "yaswanth@gmail.com",
//     phoneNumber: "9491506012"
// }
//     , {
//     name: "reddy",
//     accountNumber: "6566464655",
//     accountBalance: "50001",
//     emailId: "reddy@gmail.com",
//     phoneNumber: "9491506013"
// }];
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
// var findUser = (account: string) => {
//     console.log(account);
//     for (let data in record) {
//         console.log(data);
//         if (record[0].accountNumber == account) {
//             //  if(data.accountNumber == account){
//             //  console.log("udser"+data.accountNumber);
//             return data;
//         } else {
//             console.log({ message: "Account Number Is Not Found" });
//         }
//     }
// }
// var showBalance = (accounts: string): void => {
//     let user = findUser(accounts)
//     console.log(user);
//     console.log(`Hi, User: ${user}`);
// }
// showBalance("6566464654");
// var record:any= [{
//     name:"yaswanth",
//     accountNumber: "6566464654",
//     accountBalance: "50000",
//     emailId: "yaswanth@gmail.com",
//     phoneNumber: "9491506012"
// }
// , {
//         name: "reddy",
//         accountNumber: "6566464655",
//         accountBalance: "50001",
//         emailId: "reddy@gmail.com",
//         phoneNumber: "9491506013"
//     }];
// var findUser = (account:string)=>{
//     for (let data of record){
//         // if(record[data].accountNumber == accountNumber){
//         if (data.accountNumber == account) {
//             console.log(data);
//             return data;
//         }else{
//           console.log({message:"Account Number Is Not Found"})
//         }
//     }
// }
// var showBalance = (accounts: string):void=>{
//     let user = findUser(accounts)
//     console.log(`Hi, User: ${user.name}. 
//     Your Account Number Is ${user.accountNumber}.
//     You Have A Balance Of ${user.accountBalance}`);
// }
// showBalance("6566464655");
//----------------------------------------------------------------------------------------------
// class Records {
//     constructor(public name: string, private accountBalance: string, public emailId: string, public phoneNumber: string, private accountNumber?: string) {
//     }
//     public set setAcctNum(acctNum:string){
//         this.accountNumber =acctNum
//     } 
// }
// let fRecord = new Records("yaswanth","50000","yaswanth@gmail.com","9491506012")
// fRecord.setAcctNum = "6566464654"
// console.log(fRecord);
//---------------------------------------------------------------------------------------------------
// interface User {
//     userName: string;
//     emailId: string;
//     phoNumber: string;
// }
// class Recordss {
//     constructor(public user: User, private accountBalance: string, private accountNumber?: string) {
//     }
// //     public set setAcctNum(acctNum: string) {
// //         this.accountNumber = acctNum
// //     }
// }
// let firstRecord = new Recordss({
//     userName: "Yas",
//     emailId: "yas@gmail.com",
//     phoNumber: "65797451"
// },"555555","6566464654")
// console.log(firstRecord);
//-----------bank with class,constructor,access-----------------//
// class User {
//     constructor(
//         public name:string,
//         private accNo:number,
//         public bank:string,
//         public branch:string ,
//         private balance:number,
//         public minBalance:number){
//     }
//     public get showBalance(){
//         console.log(`user ${this.name} has a balance of ${this.balance}`);
//         return (`user ${this.name} has a balance of ${this.balance}`);   
//     }
//     public set withdraw(amt:number){
//         let check = this.balance - amt;
//         if(amt<this.balance && check> this.minBalance){
//             this.balance -= amt
//         } else {
//             console.log("Not a Valid Amount");
//         }
//     }
//     public set deposite (amt){
//         if(amt<50000){
//             this.balance += amt;
//         } else {
//             console.log("You Exceeded Max Daily Limits");
//         }
// } 
// }
// let yas = new User("yas",56597897,"SBI","PLVD",95000,5000)
// yas.showBalance;
// yas.withdraw = 5000;
// yas.deposite = 10000;
// console.log(yas);
//---------------------------bank with class,constructor,access--------------------------------//
var User = /** @class */ (function () {
    function User(name, accNo, bank, branch, balance, minBalance, loanAmt) {
        this.name = name;
        this.accNo = accNo;
        this.bank = bank;
        this.branch = branch;
        this.balance = balance;
        this.minBalance = minBalance;
        this.loanAmt = loanAmt;
        this.name = name;
        this.accNo = accNo;
        this.bank = bank;
        this.branch = branch;
        this.balance = balance;
        this.minBalance = minBalance;
        this.loanAmt = loanAmt;
    }
    Object.defineProperty(User.prototype, "showBalance", {
        get: function () {
            console.log("user " + this.name + " has a balance of " + this.balance);
            return ("user " + this.name + " has a balance of " + this.balance);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "withdraw", {
        set: function (amt) {
            var check = this.balance - amt;
            if (amt < this.balance && check > this.minBalance) {
                this.balance -= amt;
            }
            else {
                console.log("Not a Valid Amount");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "deposite", {
        set: function (amt) {
            if (amt < 50000) {
                this.balance += amt;
            }
            else {
                console.log("You Exceeded Max Daily Limits");
            }
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var Loan = /** @class */ (function (_super) {
    __extends(Loan, _super);
    function Loan(name, accNo, bank, branch, balance, minBalance, loanAmt, loanAmountRequested, loanIntrest) {
        var _this = _super.call(this, name, accNo, bank, branch, balance, minBalance, loanAmt) || this;
        _this.loanAmountRequested = loanAmountRequested;
        _this.loanIntrest = loanIntrest;
        return _this;
    }
    Object.defineProperty(Loan.prototype, "loanRequested", {
        set: function (loanAmountRequested) {
            if (this.loanAmt < 50000) {
                this.loanAmt += loanAmountRequested;
            }
            else {
                console.log(this.loanAmt += loanAmountRequested);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Loan;
}(User));
var yas = new Loan("yas", 56597897, "SBI", "PLVD", 50000, 5000, 9000);
yas.showBalance;
yas.withdraw = 5000;
yas.deposite = 10000;
yas.loanRequested = 1000;
yas.loanAmountRequested = 10000;
yas.loanIntrest = 30;
console.log(yas);
