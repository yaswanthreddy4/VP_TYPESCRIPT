//---------------types---------------------//
// number, string, boolean,null,undefined,array,tuple,enum

//1st method 
let abc: number = 123;

//2nd method 
let pqr:number;
pqr = 456

//3rd method
let mnq;
mnq = 789;
mnq = 987;

// results
console.log(abc);
console.log(pqr);
console.log(mnq);
//---------------------//

//---------------------//

let xyz:number = 123;
let user:String = "yaswanth";
let flag:boolean = true;
let undef:undefined = undefined;
let nul:null = null;

console.log(xyz);
console.log(user);
console.log(flag);
console.log(undef);
console.log(nul);
//---------------------//

//declaring array
let cars:Array<string> = ["bmw, audi"]; // 1st method
let bikes:string[] = ["hero","honda"]; //2nd method
let numb:number[] = [1,2,3,7];
let flagg: boolean[] = [true,false];
let aley: Array<any> = [1,2,3,[4,5,6],[7,8],["yaswanth","reddy","007"]]

console.log(cars);
console.log(bikes);
console.log(numb);
console.log(flagg);
console.log(aley);
//--------------------------------//

//-------tuple---------//
let y:[string,number] = ["yaswanth",700]
console.log(y);
let z: [number, string, boolean, Array<any> ];
z = [25, "yas", false,[54,"lod",5]]
console.log(z);
console.log(z[0]);
console.log(z[3]);
z[2]= true;
console.log(z[2]);
//-----------------------//

// ----------enum-------//
enum Color { Red =10, Green=20, Blue }
let c:Color = Color.Blue;
console.log(c);
let b = Color.Green
console.log(b);
let colorname:string = Color[20];
console.log(colorname);
let colorName = Color[21];
console.log(colorName);











