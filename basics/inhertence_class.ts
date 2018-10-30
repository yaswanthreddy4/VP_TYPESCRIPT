class Courses {
constructor(public courseName:string, 
    private price:number, 
    public timings:string, 
    private duration:string,
    public location?: string,
    protected discount?: number ){

    }
// getCourseDetails():void{
//     console.log(`courseName is ${this.courseName},
//     price is ${this.price},
//     trainer is ${this.location},
//     timings is ${this.timings},
//     duration is ${this.duration},
//     discount is ${this.discount}`);
// }
}
//construtor data changes dynamically
// let aws = new Course("AWS", 20000, "YASWANTH", "7-9AM", "60DAYS")
// console.log(aws);
class AwsCourse extends Courses{
    public trainer:string;
    public content:string;
    public material:string;
    public futureScope:string;
    public Discount():number{
        return this.discount
    }
}

let aws = new AwsCourse("AWS",25000,"7-9AM","3 MONTHS","HYD",25 )
aws.trainer="Yas";
aws.content = "EC2,LB,S3";
aws.material = "YES";
aws.futureScope = "YES";
console.log(aws);

class Devops extends Courses {
    private trainer: string;
    public content: string;
    public material: string;
    public futureScope: string;
    private Discount(): number {
        return this.discount
    }
    public set SetDiscount(amt:number){
        this.discount=amt;
    }
    public set SetTrainer(trainerName: string){
         this.trainer = trainerName;
    }
}

let devops = new Devops("DEVOPS", 50000, "5-9PM", "2 MONTHS", "BAN")
devops.SetDiscount = 50;
devops.SetTrainer = "Lala";
devops.content = "GIT,CHEF,JENKINS";
devops.material = "YES";
devops.futureScope = "YES";

console.log(devops);

