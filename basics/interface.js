function stitch(dimention) {
    var length = dimention.length;
    var collor = dimention.collor;
    var desgin = dimention.desgin;
    var button = dimention.button;
    console.log("Shirt with " + length + ", colour " + collor + ", desgin " + desgin);
}
stitch({
    length: 30,
    collor: 4,
    desgin: "Apple Cut"
});
function details(parameter) {
    var name = parameter.name;
    var age = parameter.age;
    var location = parameter.location;
    var state = parameter.state;
    console.log("Hi, Your Name Is " + name + ",\n                age is " + age + ",\n                location is " + location + ",\n                state is " + state);
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
function getUser(details) {
    var name = details.accName;
    var age = details.age;
    var accountNumber = details.accNo;
    var emailId = details.emailId;
    var phoneNo = details.phoneNo;
    console.log("Hi, Your Name Is " + name + ",\n                age is " + age + ",\n                accountNumber is " + accountNumber + ",\n                emailId is " + emailId + ",\n                phoneNo is " + phoneNo);
}
getUser({
    accName: "Lakshman",
    age: 25,
    accNo: 656565,
    emailId: "lak@gmail.com",
    phoneNo: 646446546
});
