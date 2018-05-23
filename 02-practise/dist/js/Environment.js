// ------------------------------------------------------------------------------
//
// environment
// author: 血夜之末(  )
// created: 2017\11\15 0015
// copyright (c) 2017 血夜之末(  )
//
// ------------------------------------------------------------------------------
// import Grass from './Grass';
// import Meat from './Meat';
// import Herbivoreanimal from './Herbivoreanimal';
// import Carnivorousanimal from './Carnivorousanimal';
// import Omnivorousanimal from './Omnivorousanimal';
var Environment = (function () {
    function Environment(animalcount, meatcount, grasscount, intertime) {
        if (animalcount === void 0) { animalcount = 20; }
        if (meatcount === void 0) { meatcount = 2; }
        if (grasscount === void 0) { grasscount = 3; }
        if (intertime === void 0) { intertime = 1; }
        this.animallist = [];
        this.foodlist = [];
        this.meat = new Meat();
        this.grass = new Grass();
        this._animalcount = animalcount;
        this._meatcount = meatcount;
        this._grasscount = grasscount;
        this._intertime = intertime;
    }
    Environment.prototype.init = function () {
        this.create();
        this.fight(this._intertime);
    };
    //初始化，创建动物组,植物数组.
    Environment.prototype.create = function () {
        this.addfood(this._meatcount, this._grasscount);
        this.initanimal(this._animalcount);
    };
    //进行厮杀，竞争。
    Environment.prototype.fight = function (intertime) {
        var _intertime = 0;
        var _round = 0;
        var that = this;
        var timeid = setTimeout(function (intertime) {
            that.hunter();
            if (this.animallist.length === 1) {
                window.clearTimeout(timeid);
            }
            _round += 1;
            this.updata(_round, this.animallist);
            _intertime += 1;
            if (_intertime % intertime === 0) {
                this.addfood(this._meatcount, this._grasscount);
            }
        }, 20);
    };
    // setTimeout(()=>{handler},time);
    // setTimeout(handler,time)
    // component.schedule(function() {
    // 	// 这里的 this 指向 component
    // 	this.doSomething();
    // }, 5);
    Environment.prototype.addfood = function (meatcount, grasscount) {
        for (var i = 1; i <= meatcount; i++) {
            this.foodlist.push(new Meat(this._meatcount)); //肉
        }
        for (var i = 1; i <= meatcount; i++) {
            this.foodlist.push(new Meat(this._grasscount)); //草
        }
    };
    Environment.prototype.initanimal = function (animalcount) {
        for (var i = 1; i <= this._animalcount; i++) {
            var t = Math.random() * 3 >> 0;
            switch (t) {
                case 0:
                    {
                        this.animallist.push(new Carnivorousanimal(i)); //肉食
                        break;
                    }
                case 1:
                    {
                        this.animallist.push(new Herbivoreanimal(i)); //草食
                        break;
                    }
                case 2:
                    {
                        this.animallist.push(new Omnivorousanimal(i)); //杂食
                        break;
                    }
                default:
                    {
                        console.log("Error!");
                    }
                    console.log("生成的动物数组（" + this._animalcount + "）：", this.animallist);
            }
        }
    };
    Environment.prototype.hunter = function () {
        //如果时间间隔不是1，则最好添加一个对foodlist是否为空的判断。
        //我认为食物应该被优先吃掉。当然，如果需要，也是很容易修改hunt规则。（食物等级设为0）
        //另外，该hunt规则，认为一段时间内，一个动物可能吃了多份食物，也可能什么都没吃。
        for (var i = 0; i <= this.foodlist.length; i++) {
            //随机数有可能指向自身。需要改进。
            var ram = Math.random() * (this.animallist.length) >> 0;
            var prey = this.foodlist[i];
            var predator = this.animallist[ram];
            predator.eat(prey._name);
        }
        for (var i = 0;; i++) {
            var ram = Math.random() * (this.animallist.length) >> 0;
            var predator = this.animallist[i];
            var prey = this.animallist[ram];
            if (predator.level >= prey.level && predator._category != 'Herbivore') {
                predator.eat(prey._name);
                this.animallist.splice(ram, 1);
            }
            else if (predator.level <= prey.level && prey._category != 'Herbivore') {
                prey.eat(predator._name);
                this.animallist.splice(i, 1);
            }
            if (this.animallist.length === 1) {
                break;
            }
        }
    };
    Environment.prototype.updata = function (round, animalist) {
        console.log('第' + round + '回合结束\n');
        console.log('现存动物：' + animalist);
    };
    return Environment;
}());
