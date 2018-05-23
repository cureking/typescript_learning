// ------------------------------------------------------------------------------
//
// b
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/22
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

///<reference path="a.ts"/>

namespace Validation
{
	const lettersRegexp = /^[A-Za-z]+$/;
	export class LettersOnlyValidator implements Validator
	{
		isAcceptable( s:string )
		{
			return lettersRegexp.test( s );
		}
	}
}
