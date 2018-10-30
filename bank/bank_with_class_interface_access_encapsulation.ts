interface Details{
    name: string;
    age:number;
    emailId: string;
    phoNumber: string;
}

class Bank{
    bankName:string;
    branchLocation:string;
    userDetails: Details;
    accNumber: string;
    accBalance:number;
    minBalance:number;

    showBalance(amt):any {
        return this.accBalance
    }
}

let bala = showBalance("54654")
console.log(bala);
