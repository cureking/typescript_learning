// ------------------------------------------------------------------------------
//
// Animal
// author: zmj
// created: 2017\11\15 0015
// copyright (c) 2017 zmj
//
// ------------------------------------------------------------------------------
abstract class Animal
{
	private _name:string;
	private _habit:string;
	private _level:number;
	private exp:number;
	constructor(name:string,habit:string)
	{
		this._name = name;
		this._habit=habit;
		this._level=0;
		this.exp=0;
	}
	get name():string
	{
		return this._name;
	}
	get habit():string
	{
		return this._habit;
	}
	get level():number
	{
		return this._level;
	}
	eat(food:string)
	{
		if(food ==="meat")
		{
			this.exp+=1;
		}
		else if(food ==="grass")
		{
			this.exp+=0.5;
		}
		else if(food ==="animal")
		{
			this.exp+=2;
		}
		else
		{
			console.log("error");
		}
		if(this.exp>1)
		{
			this._level+=this.exp>>0;
			this.exp-=this.exp>>0;
		}
	}
}