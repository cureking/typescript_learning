// ------------------------------------------------------------------------------
//
// practise-animal
// author: 血夜之末(  )
// created: 2017\11\15 0015
// copyright (c) 2017 血夜之末(  )
//
// ------------------------------------------------------------------------------
var Animal = (function () {
    //其实是应该private的。但是，实在看报红难过。
    function Animal(id, category) {
        this._name = 'animal';
        this._id = id;
        this._category = category;
        this._level = 0;
        this._exp = 0;
        this.levelup();
    }
    Object.defineProperty(Animal.prototype, "id", {
        get: function () {
            return this._id;
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
    Object.defineProperty(Animal.prototype, "exp", {
        get: function () {
            return this._exp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "category", {
        get: function () {
            return this._category;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.levelup = function () {
        if (this._exp >= 2) {
            this._exp -= 2;
            this._level += 2;
        }
        else if (this._exp >= 1 && this._exp <= 2) {
            this._exp -= 1;
            this._level += 1;
        }
    };
    Animal.prototype.eat = function (food) {
        switch (food) {
            case 'animal':
                {
                    this._exp += 2;
                    this.levelup();
                    break;
                }
            case 'meat':
                {
                    this._exp += 1;
                    this.levelup();
                    break;
                }
            case 'grass':
                {
                    this._exp += 0.5;
                    this.levelup();
                    break;
                }
            default:
                {
                    throw function (err) {
                        console.log('predator.category is undefine!');
                    };
                }
        }
    };
    return Animal;
}());
