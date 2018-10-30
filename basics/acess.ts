class Motor2 {
    public name: string;
    public type: string;
    public wheels: number;
    private cost: number;
    protected company: string;
    private speed: string;

    constructor(name: string, type: string, wheels: number, cost: number, company: string, speed: string) {
        this.name = name;
        this.type = type;
        this.wheels = wheels;
        this.cost = cost;
        this.company = company;
        this.speed = speed;
    }
    public showMotor(): void {
        console.log('this is hitech motor');
        console.log(`motor details:
         name: ${this.name}
          type: ${this.type}
           wheels: ${this.wheels}
            cost: ${this.cost}
            company: ${this.company}
            speed: ${this.speed}
         `);
    }
    private speedCheck(): string {
        return this.speed + "kmph"
    }
    public speedCheck2():string{
    return motor2.speedCheck()
    }
}
let motor2: Motor2 = new Motor2("yamaha", "rx100", 25502, 2, "yamaha", "56");
motor2.showMotor();

let abc = motor2.speedCheck2()
console.log(abc);

