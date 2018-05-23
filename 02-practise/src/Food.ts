// ------------------------------------------------------------------------------
//
// Food
// author: 血夜之末(  )
// created: 2017\11\16 0016
// copyright (c) 2017 血夜之末(  )
//
// ------------------------------------------------------------------------------


abstract class Food
{
	public _name:string;
	//其实是应该private的。但是，实在看报红难过。
	protected _count:number;
	protected _addcount:number;
	protected _level:number;
	constructor(count:number=0,level:number=0)
	{
		this._count=count;
		this._level=level;
	}

	get name( ):string
	{
		return this._name;
	}
	get count( ):number
	{
		return this._count;
	}
	set addcount(value:number){
		this._addcount=value;
	}
}
