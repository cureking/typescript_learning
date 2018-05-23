// ------------------------------------------------------------------------------
//
// Animal
// author: zmj
// created: 2017\11\15 0015
// copyright (c) 2017 zmj
//
// ------------------------------------------------------------------------------
var Animal = (function () {
    function Animal(name, habit) {
        this._name = name;
        this._habit = habit;
        this._level = 0;
        this.exp = 0;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "habit", {
        get: function () {
            return this._habit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "level", {
        get: function () {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.eat = function (food) {
        if (food === "meat") {
            this.exp += 1;
        }
        else if (food === "grass") {
            this.exp += 0.5;
        }
        else if (food === "animal") {
            this.exp += 2;
        }
        else {
            console.log("error");
        }
        if (this.exp > 1) {
            this._level += this.exp >> 0;
            this.exp -= this.exp >> 0;
        }
    };
    return Animal;
}());
