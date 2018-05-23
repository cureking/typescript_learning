// ------------------------------------------------------------------------------
//
// food
// author: zmj
// created: 2017\11\15 0015
// copyright (c) 2017 zmj
//
// ------------------------------------------------------------------------------
var Food = (function () {
    function Food() {
        this._grass = 0;
        this._meat = 0;
    }
    Food.prototype.addfood = function () {
        this._meat += 2;
        this._grass += 3;
    };
    Object.defineProperty(Food.prototype, "meat", {
        get: function () {
            return this._meat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "grass", {
        get: function () {
            return this._grass;
        },
        enumerable: true,
        configurable: true
    });
    return Food;
}());
