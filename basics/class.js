var Tailor = /** @class */ (function () {
    function Tailor() {
    }
    Tailor.prototype.stitch = function (dimensions) {
        console.log(dimensions);
    };
    Tailor.prototype.chooseWorker = function (name) {
        console.log(name);
    };
    return Tailor;
}());
var tailor = new Tailor();
tailor.stitch({
    length: 20,
    collar: 20,
    design: "Apple"
});
tailor.stitch({
    length: 40,
    collar: 40,
    design: "Slim"
});
