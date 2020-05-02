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

        /* iterate through each fish in the tank */
        for (let fish of this.fish) {
            /*
             * Add each fish' portion to the total multiply
             * by 10 because JS is inaccurate with decimals.
             */
            total = ( total + ( fish.portion * 10 ) );
        }

        /*
         * Divide by 10 to get correct value.
         */
        return ( total / 10 );
    }

    get Fish(){
        /*
         * We can easily get this by counting the fish in our tank.
         */
        return this.fish.length;
    }
}
