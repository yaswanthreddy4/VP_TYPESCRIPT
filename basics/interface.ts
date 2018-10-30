interface Shirt {
    length: number;
    collor: number;
    desgin?: string;
    button?: string;
}

function stitch(dimention:Shirt) {
let length = dimention.length;
let collor = dimention.collor;
let desgin = dimention.desgin;
let button = dimention.button;
    console.log(`Shirt with ${length}, colour ${collor}, desgin ${desgin}`);
}

stitch({
    length: 30,
    collor: 4,
    desgin: "Apple Cut"
});

interface User{
    name:string,
    age:number,
    location:string,
    state?:string
}

function details (parameter:User){
    let name=parameter.name;
    let age= parameter.age;
    let location= parameter.location;
    let state= parameter.state;

    console.log(`Hi, Your Name Is ${name},
                age is ${age},
                location is ${location},
                state is ${state}`);   
}
details({
    name: "Yaswanth Reddy",
    age: 25,
    location: "Plvd",
    state: "AP"
});

details({
    name: "Ram",
    age: 27,
    location: "Kadapa",
    state: "Kurnool"
});


interface Data {
    accName:string;
    age:number;
    accNo: number;
    emailId: string;
    phoneNo: number;
}

function getUser (details:Data){
let name = details.accName;
let age = details.age;
let accountNumber = details.accNo;
let emailId = details.emailId;
let phoneNo = details.phoneNo;
    console.log(`Hi, Your Name Is ${name},
                age is ${age},
                accountNumber is ${accountNumber},
                emailId is ${emailId},
                phoneNo is ${phoneNo}`);
}

getUser({
    accName:"Lakshman",
    age: 25,
    accNo: 656565,
    emailId: "lak@gmail.com",
    phoneNo: 646446546

})



