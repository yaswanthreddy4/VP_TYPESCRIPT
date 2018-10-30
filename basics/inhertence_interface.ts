interface Course {
         courseName: string;
         price: number;
         timings: string;
         duration: string;
         location?: string;
         discount?: number;

    }
class Hadoop implements Course {
    public courseName: string;
    public price: number;
    public timings: string;
    public duration: string;
    public location: string;
    public discount: number;
    public trainer: string;
    public content: string;
    public material: string;
    public futureScope: string;
}

let hadoop = new Hadoop()
hadoop.courseName = "hadoop";
hadoop.price = 255000;
hadoop.timings = "9-8PM";
hadoop.duration= "5DAYS";
hadoop.location = "NOIDA";
hadoop.discount= 2250;
hadoop.trainer = "RAM";
hadoop.content = "LOL,BOL,KOL";
hadoop.material = "YES";
hadoop.futureScope = "YES";
console.log(hadoop);

class TABULE implements Course {
    public courseName: string;
    public price: number;
    public timings: string;
    public duration: string;
    public location?: string;
    public discount?: number;
    public trainer: string;
    public content: string;
    public material: string;
    public futureScope: string;
    private Discount(): number {
        return this.discount
    }
    public set SetDiscount(amt: number) {
        this.discount = amt;
    }
    public set SetTrainer(trainerName: string) {
        this.trainer = trainerName;
    }
}

let tabule = new TABULE()
tabule.courseName= "tabule";
tabule.price= 2500;
tabule.timings= "5-6AM";
tabule.duration= "45DAYS";
tabule.location= "MUMBAI";
tabule.SetDiscount = 50;
tabule.SetTrainer = "Lala";
tabule.content = "GIT,CHEF,JENKINS";
tabule.material = "YES";
tabule.futureScope = "YES";

console.log(tabule);

