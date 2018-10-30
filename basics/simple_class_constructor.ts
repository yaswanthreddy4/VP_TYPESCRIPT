class Motor3 {
    constructor(public name?: string, public type?: string, public wheels?: number, public cost?: number, public company?: string, public speed?: string) {}
    
    showMotor(): void {
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
    speedCheck(): string {
        return this.speed + "kmph"
    }
}
let motor3: Motor3 = new Motor3("yamaha", "rx100", 25502, 2, "yamaha", "56");
motor3.showMotor();
let speedCheck2 = motor3.speedCheck();
console.log(speedCheck2);



