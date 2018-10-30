//by getter & setter
//tsc data_encapulation.ts --target es5
interface Coustmer {
    name:string;
    emailId:string;
}
class Company{
    public name:string;
    public size:number;
    public income:number;
    private coustmer: Coustmer;
    public get Income1(){
        return this.income;
    }
    public set Income2(income:number) {
        this.income = income;
    }
    public get Coustmer1() {
        return this.coustmer;
    }
    public set Custmer2(coustmer: Coustmer) {
        this.coustmer = coustmer;
    }
}

let company = new Company();
company.name = "yas";
company.size = 5;
company.Income2 = 2500000;
company.Custmer2 ={
    name: "laacoustmer laaa",
    emailId: "lala@gmail.com"
}
let income_get = company.Income1
console.log(income_get);
let custmer_get = company.Coustmer1
console.log(custmer_get);





