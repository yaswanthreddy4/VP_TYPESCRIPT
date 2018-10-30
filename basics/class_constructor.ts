class Motor{
    name:string;
    type:string;
    wheels:number;
    cost:number;
    company:string;
    speed:string;

    constructor(name:string, type:string, wheels:number, cost:number, company:string, speed:string){
        this.name = name;
        this.type = type;
        this.wheels = wheels;
        this.cost = cost;
        this.company = company;
        this.speed = speed;   
    }
    showMotor():void{
        console.log('this is hitech motor');
        console.log(`motor details:
         name: ${this.name }
          type: ${this.type}
           wheels: ${this.wheels}
            cost: ${this.cost}
            company: ${this.company}
            speed: ${this.speed}
         `);
    }
    speedCheck():string{
        return this.speed +"kmph"
    }
}
let motor:Motor = new Motor("yamaha", "rx100", 25502, 2 ,"yamaha", "56");
motor.showMotor();
let speedCheck = motor.speedCheck();
console.log(speedCheck);

