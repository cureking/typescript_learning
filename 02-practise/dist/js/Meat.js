// ------------------------------------------------------------------------------
//
// Meat
// author: 血夜之末(  )
// created: 2017\11\16 0016
// copyright (c) 2017 血夜之末(  )
//
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Meat = (function (_super) {
    __extends(Meat, _super);
    function Meat(addcount, count, name, exp) {
        if (addcount === void 0) { addcount = 2; }
        if (count === void 0) { count = 0; }
        if (name === void 0) { name = 'meat'; }
        if (exp === void 0) { exp = 1; }
        var _this = _super.call(this) || this;
        _this._foodtype = 'meat';
        _this._addcount = addcount;
        return _this;
    }
    Meat.prototype.addmeat = function () {
        this._count += this._addcount;
    };
    return Meat;
}(Food));
