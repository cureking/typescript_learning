// ------------------------------------------------------------------------------
//
// Omnivorousanimal
// author: 血夜之末(  )
// created: 2017\11\16 0016
// copyright (c) 2017 血夜之末(  )
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
var Omnivorousanimal = (function (_super) {
    __extends(Omnivorousanimal, _super); //杂食
    function Omnivorousanimal(id, category) {
        if (category === void 0) { category = 'Omnivorous'; }
        return _super.call(this, id, category) || this;
    }
    return Omnivorousanimal;
}(Animal //杂食
));
