// ------------------------------------------------------------------------------
//
// place
// author: zmj
// created: 2017\11\15 0015
// copyright (c) 2017 zmj
//
// ------------------------------------------------------------------------------
var Place = (function () {
    function Place() {
        this.Animals = [];
        this.num = 1;
        this.curnum = 0;
        this.food = new Food();
    }
    Place.prototype.addAnimal = function () {
        this.food.addfood();
        console.log(this.food);
        for (; this.num <= 20; this.num++) {
            var t = Math.random() * 3 >> 0;
            if (t === 0) {
                this.Animals.push(new Carnivorous(this.num + "")); //肉食
            }
            else if (t === 1) {
                this.Animals.push(new Herbivorous(this.num + "")); //草食
            }
            else if (t === 2) {
                this.Animals.push(new Omnivorous(this.num + "")); //杂食
            }
            else {
                console.log("error");
            }
        }
        console.log("生成的20只动物", this.Animals);
    };
    Place.prototype.fight = function () {
        var a = (Math.random() * this.Animals.length >> 0);
        var b = a + "";
        if (this.Animals[this.curnum].habit === "肉食") {
            if (b === this.Animals[this.curnum].name && this.food._meat > 0) {
                this.Animals[this.curnum].eat("meat");
                this.food._meat -= 1;
                this.curnum += 1;
            }
            else {
                if (this.Animals[this.curnum].level >= this.Animals[a].level) {
                    this.Animals[this.curnum].eat("animal");
                    this.Animals.splice(a, 1);
                    this.curnum += 1;
                }
                else {
                    if (this.Animals[a].habit === "肉食" || this.Animals[a].habit === "杂食") {
                        this.Animals[a].eat("animal");
                        this.Animals.splice(this.curnum, 1);
                    }
                    else {
                        this.curnum += 1;
                    }
                }
            }
        }
        else if (this.Animals[this.curnum].habit === "草食") {
            if (b === this.Animals[this.curnum].name && this.food._grass > 0) {
                this.Animals[this.curnum].eat("grass");
                this.food._grass -= 1;
                this.curnum += 1;
            }
            else {
                if (this.Animals[this.curnum].level <= this.Animals[a].level && (this.Animals[a].habit === "肉食" || this.Animals[a].habit === "杂食")) {
                    this.Animals[a].eat("animal");
                    this.Animals.splice(this.curnum, 1);
                }
                else {
                    this.curnum += 1;
                }
            }
        }
        else if (this.Animals[this.curnum].habit === "杂食") {
            if (b === this.Animals[this.curnum].name) {
                var temp = Math.random() * 2 >> 0;
                if (temp === 0 && this.food._meat > 0) {
                    this.Animals[this.curnum].eat("meat");
                    this.food._meat -= 1;
                }
                else if (temp === 1 && this.food._grass > 0) {
                    this.Animals[this.curnum].eat("grass");
                    this.food._grass -= 1;
                }
                this.curnum += 1;
            }
            else {
                if (this.Animals[this.curnum].level >= this.Animals[a].level) {
                    this.Animals[this.curnum].eat("animal");
                    this.Animals.splice(a, 1);
                    this.curnum += 1;
                }
                else {
                    if (this.Animals[a].habit === "肉食" || this.Animals[a].habit === "杂食") {
                        this.Animals[a].eat("animal");
                        this.Animals.splice(this.curnum, 1);
                    }
                    else {
                        this.curnum += 1;
                    }
                }
            }
        }
        else {
            console.log("error");
        }
        this.update();
    };
    Place.prototype.update = function () {
        console.log(this.food);
        console.log("现存动物", this.Animals);
    };
    Place.prototype.result = function () {
        for (;;) {
            for (; this.curnum < this.Animals.length;) {
                this.fight();
            }
            this.curnum = 0;
            this.food.addfood();
            if (this.Animals.length === 1) {
                break;
            }
        }
    };
    return Place;
}());
