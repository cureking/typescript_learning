// ------------------------------------------------------------------------------
//
// Grid
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/11/15
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------

class Grid
{
	static ORIGIN = { x: 0, y: 0 };

	static CALC( x:number, y:number )
	{
		return x + y;
	}

	constructor()
	{
		throw new Error( "This class not allow instance." );
	}
}

let grid:Grid = new Grid();