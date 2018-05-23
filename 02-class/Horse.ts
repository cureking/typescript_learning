// ------------------------------------------------------------------------------
//
// Horse
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/15
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

import Animal from "./Animal";

export default class Horse extends Animal
{
	constructor( name:string, weight:number )
	{
		super( name );
	}

	move( distanceInMeters = 45 )
	{
		console.log( "Galloping..." );
		super.move( distanceInMeters );
	}
}