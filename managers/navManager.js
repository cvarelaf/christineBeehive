class NavManager{
    constructor(dataManager){
        this.dataManager = dataManager;
        this.beesComponent = document.getElementById('beesComponent');
        this.postsComponent = document.getElementById('postsComponent');
        //Get container for bee posts, album and todos
    }

    showBees(){
        this.dataManager.bees.forEach(bee => {
            var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
        });
    }

    showBeePosts(){
        this.dataManager.posts.forEach(post => {
            var postComponent = new PostComponent(post, this.postsComponent, this.dataManager);
        });

    }

    showBeeAlbum(){

    }

    showBeeTodos(){
        
    }
}