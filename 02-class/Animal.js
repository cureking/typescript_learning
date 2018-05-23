"use strict";
// ------------------------------------------------------------------------------
//
// Animal
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/15
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = (function () {
    function Animal(theName) {
        this._name = theName;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this._name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
exports.default = Animal;
