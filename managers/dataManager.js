class DataManager{

    constructor(){
        
        this.bees = [];
        this.posts = [];
        this.currentBee = null;

        this.user = new Bee (100,'Esteban Padilla', 'epadilla', 'ep@estebanpadilla.com', '506 87066660', new Address ('Cartago', new Geo (0.0,0.0), 'Calle Quizarraces', '1000', '1000/1000'));

        this.post = new Post (100, 100, 'Title Test', 'Body Test');
        
        this.bees.push(this.user);
        this.posts.push(this.post);
        console.log(this.user);
        console.log(this.post);
    }

    setCurrentBee(bee){
        this.currentBee = bee;
        console.log('Test'+ this.currentBee);
    }
}