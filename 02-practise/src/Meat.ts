// ------------------------------------------------------------------------------
//
// Meat
// author: 血夜之末(  )
// created: 2017\11\16 0016
// copyright (c) 2017 血夜之末(  )
//
// ------------------------------------------------------------------------------

class Meat extends Food
{
	public _foodtype:string='meat';
	constructor( addcount:number = 2, count:number = 0, name:string = 'meat', exp:number = 1 )
	{
		super();
		this._addcount = addcount;
	}

	addmeat()
	{
		this._count += this._addcount;
	}
}