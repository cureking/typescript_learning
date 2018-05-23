// ------------------------------------------------------------------------------
//
// food
// author: zmj
// created: 2017\11\15 0015
// copyright (c) 2017 zmj
//
// ------------------------------------------------------------------------------

class Food
{
	public _meat:number;
	public _grass:number;
	constructor()
	{
		this._grass=0;
		this._meat=0;
	}
	addfood()
	{
		this._meat+=2;
		this._grass+=3;
	}
	get meat():number
	{
		return this._meat;
	}
	get grass():number
	{
		return this._grass;
	}
}