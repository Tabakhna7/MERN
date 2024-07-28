class Ninja {
    constructor (name ,speed =3, health=90 , strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }

    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("name : "+ this.name, " and health is: "+this.health+" the speed is : "+this.speed, "and health is: "+this.health)
    }
    drinkSake(){
        this.health+=10;
        console.log(this.health);
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(name){


        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }

    speakWisdom =()=>this.drinkSake();
}

const batata= new Sensei("Tabakhna");
batata.speakWisdom();
batata.showStats();
