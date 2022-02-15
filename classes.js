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
var Employee = /** @class */ (function () {
    function Employee(name, edu, wrk) {
        this.eName = name;
        this.edu = edu,
            this.work = wrk;
    }
    Employee.prototype.greet = function () {
        console.log("Hello I'm ".concat(this.eName));
        console.log("Hello I'm doing work ".concat(this.work));
        console.log("Hello my edu is : ".concat(this.edu));
    };
    return Employee;
}());
var e1 = new Employee('Pooja', 'be', 'engg');
//console.log(e1.eName)  cannot use as this is private
e1.greet();
///Access Modifiers 
//Public - free accessiblity
//Protected -  within class and subclass
//private - within class
//By default every member is public
var Mananger = /** @class */ (function (_super) {
    __extends(Mananger, _super);
    function Mananger(mname, edu, wrk) {
        return _super.call(this, mname, edu, wrk) || this;
    }
    Mananger.prototype.workSummry = function () {
        console.log("you are doing great work with work : ".concat(this.edu, " and edu : ").concat(this.edu));
    };
    return Mananger;
}(Employee));
var m1 = new Mananger('Pooja', 'be', 'engg');
//console.log(e1.eName)  cannot use as this is private
m1.greet();
m1.workSummry();
console.log(m1.work);
//console.log(m1.edu) cannot use as protected
