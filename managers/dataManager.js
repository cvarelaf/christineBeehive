class DataManager{

    constructor(){
        this.bees = [];
        this.currentBee = null;

        this.user = new Bee (100,'Esteban Padilla', 'epadilla', 'ep@estebanpadilla.com', '506 87066660', new Address ('Cartago', new Geo (0.0,0.0), 'Calle Quizarraces', '1000', '1000/1000'));
        
        this.bees.push(this.user);
    }

    setCurrentBee(bee){
        this.currentBee = bee;
        console.log(this.currentBee);
    }
}