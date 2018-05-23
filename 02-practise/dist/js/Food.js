// ------------------------------------------------------------------------------
//
// Food
// author: 血夜之末(  )
// created: 2017\11\16 0016
// copyright (c) 2017 血夜之末(  )
//
// ------------------------------------------------------------------------------
var Food = (function () {
    function Food(count, level) {
        if (count === void 0) { count = 0; }
        if (level === void 0) { level = 0; }
        this._count = count;
        this._level = level;
    }
    Object.defineProperty(Food.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "addcount", {
        set: function (value) {
            this._addcount = value;
        },
        enumerable: true,
        configurable: true
    });
    return Food;
}());
