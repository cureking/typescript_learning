// ------------------------------------------------------------------------------
//
// inone
// author: 血夜之末(  )
// created: 2017\11\15 0015
// copyright (c) 2017 血夜之末(  )
//
// ------------------------------------------------------------------------------

class environment{
	grassexp:number=0.5;
	meatexp:number=1;
	animalexp:number=2;

	constructor(animalcount:number=20,meatcount:number=2,grasscount:number=3,intertime:number=1){

	}
	hunter(){//从动物实例组开始遍历，进行捕食行为。

	}
	eat(predator,prey){// predator捕食者，prey被捕食者。
		if(predator.level>=prey.level){
			switch(prey.category){//通过对category的判断，来增加predator的经验。
				case animal:{
					predator.exp+=this.animalexp;
					dead(prey);
					break;
				}
				case meat:{
					predator.exp+=this.meatexp;
					meatcount-=1;
					break;
				}
				case grass:{
					predator.exp+=this.grassexp;
					grasscount-=1;
					break;
				}
				default:{
					throw function( err ){
						console.log('predator.category is undefine!');
					}
				}
			}
		}
	}
	dead(){//当一个动物死去时，需要将其弹出animallist。

	}

}