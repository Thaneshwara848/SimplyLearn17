var Demo2 = /** @class */ (function () {
    function Demo2() {
        for (var i = 0; i <= 10; i++) {
            if (i % 2 == 0) {
                console.log("Even Numbers :" + i);
            }
        }
    }
    Demo2.prototype.display = function () {
        for (var j = 0; j <= 5; j++) {
            console.log("   J :" + j);
        }
    };
    return Demo2;
}());
function display123() {
    console.log(" THIS is a Function  out side class ...!");
}
var d2 = new Demo2();
// var d3= new Demo2();// no need of wasting the momorey using new key work 
d2.display();
display123(); // if its a function no  need to crrateing objeect , so directly we can print 
