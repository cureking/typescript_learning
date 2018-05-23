// ------------------------------------------------------------------------------
//
// Snake
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/15
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

import Animal from "./Animal";

export default class Snake extends Animal
{

	private _length:number;

	constructor( name:string, length:number )
	{
		super( name );

		//this._length = length;
		this.length = length;
	}

	set length( value:number )
	{
		this._length = value;
	}

	setLength( value:number )
	{
		this._length = value;
	}

	move( distanceInMeters:number = 5, env:string = "land" )
	{
		if( env === "land" )
		{
			distanceInMeters *= 0.8;
		}
		else if( env === "water" )
		{
			distanceInMeters *= 1.5;
		}
		console.log( "Slithering..." );
		super.move( distanceInMeters );
	}
}