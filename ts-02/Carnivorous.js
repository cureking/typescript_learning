// ------------------------------------------------------------------------------
//
// Carnivorous
// author: zmj
// created: 2017\11\15 0015
// copyright (c) 2017 zmj
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
var Carnivorous = (function (_super) {
    __extends(Carnivorous, _super);
    function Carnivorous(name, habit) {
        if (habit === void 0) { habit = "肉食"; }
        return _super.call(this, name, habit) || this;
    }
    return Carnivorous;
}(Animal));
