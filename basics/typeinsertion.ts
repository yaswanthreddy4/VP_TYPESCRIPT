let list1;
list1 = "fasak"
// list1 = [1,2,3,4,5,6,,8,9]
var listLength = (list1 as number[]).length;
var listLen = (<Array<number>>list1).length;
let sam = list1.length
console.log(sam);
 
console.log(listLength);
console.log(listLen);


var sample1;
sample1 = "hello";
let a = (sample1 as string).concat("world");
let n = (<string>sample1.charAt(2))
console.log(a);
console.log(n);
console.log(sample1);



