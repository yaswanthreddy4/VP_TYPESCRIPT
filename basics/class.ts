interface Shirt {
    length: number;
    collor: number;
    desgin?: string;
    button?: string;
}

class Tailor{
    dimensions:Shirt;
    workers:string[];

    stitch(dimensions):void{
        console.log(dimensions);
    }

    chooseWorker(name): void {
        console.log(name);
    }
}

let tailor = new Tailor();
tailor.stitch({
    length: 20,
    collar: 20,
    design: "Apple"
})
tailor.stitch({
    length: 40,
    collar: 40,
    design: "Slim"
})
