var Demo1 = /** @class */ (function () {
    function Demo1() {
        console.log("Hi Constructor");
    }
    Demo1.prototype.abc = function () {
        console.log("Hi Method");
    };
    return Demo1;
}());
var d = new Demo1();
d.abc();
