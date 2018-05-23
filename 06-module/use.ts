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
let letter = new Validation.LettersOnlyValidator();
console.log( letter.isAcceptable( 'adlfjald3skf' ) );