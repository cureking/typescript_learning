"use strict";
// ------------------------------------------------------------------------------
//
// Snake
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/15
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
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
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name, length) {
        var _this = _super.call(this, name) || this;
        //this._length = length;
        _this.length = length;
        return _this;
    }
    Object.defineProperty(Snake.prototype, "length", {
        set: function (value) {
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Snake.prototype.setLength = function (value) {
        this._length = value;
    };
    Snake.prototype.move = function (distanceInMeters, env) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        if (env === void 0) { env = "land"; }
        if (env === "land") {
            distanceInMeters *= 0.8;
        }
        else if (env === "water") {
            distanceInMeters *= 1.5;
        }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal_1.default));
exports.default = Snake;
