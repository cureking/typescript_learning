// ------------------------------------------------------------------------------
//
// practise-animal
// author: 血夜之末(  )
// created: 2017\11\15 0015
// copyright (c) 2017 血夜之末(  )
//
// ------------------------------------------------------------------------------

abstract class Animal
{
	private _id:number;
	private _level:number;
	private _exp:number;
	public _category:string;
	public _name:string='animal';
	//其实是应该private的。但是，实在看报红难过。

	constructor( id:number, category:string )
	{
		this._id = id;
		this._category = category;
		this._level = 0;
		this._exp = 0;
		this.levelup();
	}

	get id():number
	{
		return this._id;
	}
	get level():number
	{
		return this._level;
	}
	get exp():number
	{
		return this._exp;
	}
	get category():string
	{
		return this._category;
	}

	levelup()
	{
		if( this._exp >= 2 )
		{
			this._exp -= 2;
			this._level += 2;
		}
		else if( this._exp >= 1 && this._exp <= 2 )
		{
			this._exp -= 1;
			this._level += 1;
		}
	}

	eat( food:string )
	{// predator捕食者，prey被捕食者。
		switch( food )
		{//通过对category的判断，来增加predator的经验。
			case 'animal' :
			{
				this._exp += 2;
				this.levelup();
				break;
			}
			case 'meat':
			{
				this._exp += 1;
				this.levelup();
				break;
			}
			case 'grass':
			{
				this._exp += 0.5;
				this.levelup();
				break;
			}
			default:
			{
				throw function( err ){
					console.log( 'predator.category is undefine!' );
				};
			}

		}
	}

}

