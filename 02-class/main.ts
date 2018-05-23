// ------------------------------------------------------------------------------
//
// main
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/15
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

import Animal from "./Animal";
import Snake from "./Snake";

let snake:Animal = new Snake( "whs", 80 );
(<Snake>snake).length = 10;
(snake as Snake).setLength( 10 );
console.log( snake.move() );