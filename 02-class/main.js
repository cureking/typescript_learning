"use strict";
// ------------------------------------------------------------------------------
//
// main
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/15
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var Snake_1 = require("./Snake");
var snake = new Snake_1.default("whs", 80);
snake.length = 10;
snake.setLength(10);
console.log(snake.move());
