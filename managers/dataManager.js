class DataManager{

    constructor(){
        
        this.bees = [];
        this.posts = [];
        this.comments = [];
        this.currentBee = null;
        this.user = new Bee (100,'Esteban Padilla', 'epadilla', 'ep@estebanpadilla.com', '506 87066660', new Address ('Cartago', new Geo (0.0,0.0), 'Calle Quizarraces', '1000', '1000/1000'));
        this.post = new Post (100, 100, 'Title Test', 'Body Test');
        this.comment = new Comment(100,100,'Test','Test','Test');
        
        this.bees.push(this.user);
        this.posts.push(this.post);
        this.comments.push(this.comment);
    }

    setCurrentBee(bee){
        this.currentBee = bee;
        console.log('Test'+ this.currentBee);
    }

    addPostToBee(post){
        this.bees.forEach(function(bee){
            //function recibiendoBee(bee)
            if(bee.id === post.userId){
                bee.posts.push(post);
                return;
            }
        });
    }

    addCommentToPost(comment){
        this.bees.forEach(function(bee){
            bee.posts.forEach(function(post){
                // if(post.id === comment.postId){
                //     post.comments.push(comment);
                //     return;
                // }
            });
        });
    }
}