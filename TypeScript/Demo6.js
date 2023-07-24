var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Soniaya = /** @class */ (function () {
    function Soniaya() {
        this.site = 2;
        this.scar = "BMW ";
        this.money = 500000;
        console.log("SITE :" + this.site);
        console.log(" CAR :" + this.scar);
        console.log(" MONEY :" + this.money);
    }
    return Soniaya;
}());
var Rahul = /** @class */ (function (_super) {
    __extends(Rahul, _super);
    function Rahul() {
        var _this = _super.call(this) || this;
        _this.car = "BENZ";
        console.log("================");
        console.log("SITE :" + _this.site);
        console.log(" Rahul have :" + _this.car);
        console.log(" SONIY  have :" + _this.scar);
        console.log(" MONEY :" + _this.money);
        return _this;
    }
    return Rahul;
}(Soniaya));
var r = new Rahul();
