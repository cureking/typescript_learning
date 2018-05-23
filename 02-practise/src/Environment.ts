// ------------------------------------------------------------------------------
//
// environment
// author: 血夜之末(  )
// created: 2017\11\15 0015
// copyright (c) 2017 血夜之末(  )
//
// ------------------------------------------------------------------------------
// import Grass from './Grass';
// import Meat from './Meat';
// import Herbivoreanimal from './Herbivoreanimal';
// import Carnivorousanimal from './Carnivorousanimal';
// import Omnivorousanimal from './Omnivorousanimal';

class Environment
{
	animallist:Animal[] = [];
	foodlist:Food[] = [];
	meat = new Meat();
	grass = new Grass();

	_animalcount:number;//生成的动物数量。
	_meatcount:number;
	_grasscount:number;
	_intertime:number;

	constructor( animalcount:number = 20, meatcount:number = 2, grasscount:number = 3, intertime:number = 1 )
	{
		this._animalcount = animalcount;
		this._meatcount = meatcount;
		this._grasscount = grasscount;
		this._intertime = intertime;
	}

	init(){
		this.create();
		this.fight(this._intertime);
	}

	//初始化，创建动物组,植物数组.
	create()
	{
		this.addfood( this._meatcount, this._grasscount );
		this.initanimal( this._animalcount );
	}

	//进行厮杀，竞争。
	fight( intertime )
	{
		let _intertime = 0;
		let _round=0;
		let that=this;
		let timeid = setTimeout( function( intertime ){
			that.hunter();
			if( this.animallist.length === 1 )
			{
				window.clearTimeout( timeid );
			}
			_round+=1;
			this.updata(_round, this.animallist);

			_intertime += 1;
			if( _intertime%intertime===0 )
			{
				this.addfood( this._meatcount, this._grasscount );
			}
		}, 20 );
	}


	




	// setTimeout(()=>{handler},time);
	// setTimeout(handler,time)
	// component.schedule(function() {
	// 	// 这里的 this 指向 component
	// 	this.doSomething();
	// }, 5);

	addfood( meatcount, grasscount )
	{
		for( let i = 1; i <= meatcount; i++ )
		{
			this.foodlist.push( new Meat( this._meatcount ) );//肉
		}
		for( let i = 1; i <= meatcount; i++ )
		{
			this.foodlist.push( new Meat( this._grasscount ) );//草
		}
	}

	initanimal( animalcount )
	{
		for( let i = 1; i <= this._animalcount; i++ )
		{
			let t = Math.random() * 3 >> 0;
			switch( t )
			{
				case 0:
				{
					this.animallist.push( new Carnivorousanimal( i ) );//肉食
					break;
				}
				case 1:
				{
					this.animallist.push( new Herbivoreanimal( i ) );//草食
					break;
				}
				case 2:
				{
					this.animallist.push( new Omnivorousanimal( i ) );//杂食
					break;
				}
				default:
				{
					console.log( "Error!" );
				}
					console.log( "生成的动物数组（" + this._animalcount + "）：", this.animallist );
			}
		}
	}

	hunter()//从动物实例组开始遍历，进行捕食行为。
	{
		//如果时间间隔不是1，则最好添加一个对foodlist是否为空的判断。
		//我认为食物应该被优先吃掉。当然，如果需要，也是很容易修改hunt规则。（食物等级设为0）
		//另外，该hunt规则，认为一段时间内，一个动物可能吃了多份食物，也可能什么都没吃。
		for( let i = 0; i <= this.foodlist.length; i++ )
		{//predator捕食者，prey被食者。
			//随机数有可能指向自身。需要改进。
			let ram = Math.random() * (this.animallist.length)>>0;
			let prey = this.foodlist[ i ];
			let predator = this.animallist[ ram ];
			predator.eat( prey._name );
		}

		for( let i = 0; ; i++ )
		{
			let ram = Math.random() * (this.animallist.length)>>0;
			let predator = this.animallist[ i ];
			let prey = this.animallist[ ram ];

			if( predator.level >= prey.level && predator._category != 'Herbivore' )
			{
				predator.eat( prey._name );
				this.animallist.splice( ram, 1 );
			}
			else if( predator.level <= prey.level && prey._category != 'Herbivore' )
			{
				prey.eat( predator._name );
				this.animallist.splice( i, 1 );
			}

			if( this.animallist.length === 1 )
			{
				break;
			}
		}
	}
	updata(round,animalist){
		console.log('第'+round+'回合结束\n');
		console.log('现存动物：'+animalist);
	}



	//可以在这后面添加动画模块。然后通过在指定位置调用即可。
}