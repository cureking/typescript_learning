// ------------------------------------------------------------------------------
//
// a
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/22
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
//
// b
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/22
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
///<reference path="a.ts"/>
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
// ------------------------------------------------------------------------------
//
// use
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/22
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
///<reference path="a.ts"/>
///<reference path="b.ts"/>
// use code...
var letter = new Validation.LettersOnlyValidator();
console.log(letter.isAcceptable('adlfjald3skf'));
