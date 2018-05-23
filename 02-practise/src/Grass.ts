// ------------------------------------------------------------------------------
//
// Grass
// author: 血夜之末(  )
// created: 2017\11\16 0016
// copyright (c) 2017 血夜之末(  )
//
// ------------------------------------------------------------------------------

class Grass extends Food
{
	public _foodtype:string='grass';
	constructor( addcount:number = 2, name:string = 'grass', exp:number = 0.5, count:number = 0 )
	{
		super();
		this._addcount = addcount;
	}

	addmeat()
	{
		this._count += this._addcount;
	}
}