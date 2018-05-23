// ------------------------------------------------------------------------------
//
// Animal
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/15
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

export default class Animal
{
	protected _name:string;

	constructor( theName:string ){ this._name = theName; }

	get name():string
	{
		return this._name;
	}

	move( distanceInMeters:number = 0 )
	{
		console.log( `${this._name} moved ${distanceInMeters}m.` );
	}
}
