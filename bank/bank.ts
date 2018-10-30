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

class User {
    constructor(
        public name: string,
        protected accNo: number,
        public bank: string,
        public branch: string,
        private balance: number,
        public minBalance: number,
        protected loanAmt:number) {
             this.name= name;
             this.accNo= accNo;
             this.bank=bank;
             this.branch= branch;
             this.balance=balance;
             this.minBalance= minBalance;
             this.loanAmt = loanAmt;
    }
    public get showBalance() {
        console.log(`user ${this.name} has a balance of ${this.balance}`);
        return (`user ${this.name} has a balance of ${this.balance}`);
    }
    public set withdraw(amt: number) {
        let check = this.balance - amt;
        if (amt < this.balance && check > this.minBalance) {
            this.balance -= amt
        } else {
            console.log("Not a Valid Amount");
        }
    }
    public set deposite(amt) {
        if (amt < 50000) {
            this.balance += amt;
        } else {
            console.log("You Exceeded Max Daily Limits");
        }
    }
}
class Loan extends User{
    public loanAmountRequested:number;
    public loanIntrest: number;
    constructor(name: string, accNo: number, bank: string, branch: string, balance: number, minBalance: number, loanAmt: number,
        loanAmountRequested?:number, loanIntrest?:number){
        super(name, accNo, bank, branch, balance, minBalance, loanAmt);
        this.loanAmountRequested = loanAmountRequested;
        this.loanIntrest =loanIntrest;
        }

    public set loanRequested(loanAmountRequested:number){
        if (this.loanAmt<50000){
            this.loanAmt += loanAmountRequested;
        }else{
           console.log(  this.loanAmt +=loanAmountRequested); 
        }
    }
}

let yas = new Loan("yas", 56597897, "SBI", "PLVD", 50000, 5000,9000)
yas.showBalance;
yas.withdraw = 5000;
yas.deposite = 10000;
yas.loanRequested=1000;
yas.loanAmountRequested=10000;
yas.loanIntrest=30;
console.log(yas);



