"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (n1, n2) {
        return n1 + n2;
    };
    Calculator.prototype.sub = function (n1, n2) {
        return n1 - n2;
    };
    Calculator.prototype.div = function (n1, n2) {
        return n1 / n2;
    };
    Calculator.prototype.cube = function (n) {
        return Math.pow(n, 3);
    };
    return Calculator;
}());
exports.Calculator = Calculator;
