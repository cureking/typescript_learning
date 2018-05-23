// ------------------------------------------------------------------------------
//
// inone
// author: 血夜之末(  )
// created: 2017\11\15 0015
// copyright (c) 2017 血夜之末(  )
//
// ------------------------------------------------------------------------------
var environment = (function () {
    function environment(animalcount, meatcount, grasscount, intertime) {
        if (animalcount === void 0) { animalcount = 20; }
        if (meatcount === void 0) { meatcount = 2; }
        if (grasscount === void 0) { grasscount = 3; }
        if (intertime === void 0) { intertime = 1; }
        this.grassexp = 0.5;
        this.meatexp = 1;
        this.animalexp = 2;
    }
    environment.prototype.hunter = function () {
    };
    environment.prototype.eat = function (predator, prey) {
        if (predator.level >= prey.level) {
            switch (prey.category) {
                case animal: {
                    predator.exp += this.animalexp;
                    dead(prey);
                    break;
                }
                case meat: {
                    predator.exp += this.meatexp;
                    meatcount -= 1;
                    break;
                }
                case grass: {
                    predator.exp += this.grassexp;
                    grasscount -= 1;
                    break;
                }
                default: {
                    throw function (err) {
                        console.log('predator.category is undefine!');
                    };
                }
            }
        }
    };
    environment.prototype.dead = function () {
    };
    return environment;
}());
