var Demo5 = /** @class */ (function () {
    function Demo5(id, name, age, salary, desig, PAN, place) {
        if (place === void 0) { place = "Delhi"; }
        console.log("ID :" + id);
        console.log("NAME :" + name);
        console.log("Age:" + age);
        console.log("Salary :" + salary);
        console.log("Desig :" + desig);
        console.log("PAN :" + PAN);
        console.log("place :" + place);
        console.log("================");
    }
    return Demo5;
}());
var d5 = new Demo5(12345, "ABI", 26, 90000, "Trainer", "ABC123");
var d6 = new Demo5(63434, "Bindu", 26, 50000, "Develper");
