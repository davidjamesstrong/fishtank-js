/*
 * Class representing the fish we need to put in our fish tank.
 */
class Fish {
    constructor(name, type, portion) {
        this.name = name;
        this.type = type + ' fish';
        this.portion = portion;
    }
}

/*
 * Class representing our tank and ready for all its glorious fishy content.
 */
class Tank {
    constructor(fish){
        this.fish = fish;
    }

    get Feed() {
        let total = 0;

        for (let f of this.fish) {
            total = ( total + ( f.portion * 10 ) );
        }

        return ( total / 10 );
    }

    get Fish(){
        return this.fish.length;
    }
}
