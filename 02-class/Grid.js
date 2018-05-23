// ------------------------------------------------------------------------------
//
// Grid
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/15
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
var Grid = (function () {
    function Grid() {
        throw new Error("This class not allow instance.");
    }
    Grid.CALC = function (x, y) {
        return x + y;
    };
    Grid.ORIGIN = { x: 0, y: 0 };
    return Grid;
}());
var grid = new Grid();
