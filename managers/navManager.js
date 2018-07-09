class NavManager{
    constructor(dataManager){
        this.dataManager = dataManager;
        this.beesComponent = document.getElementById('beesComponent');
        //Get container for bee posts, album and todos
    }

    showBees(){
        this.dataManager.bees.forEach(bee => {
            var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
        });
    }

    showBeePosts(){

    }

    showBeeAlbum(){

    }

    showBeeTodos(){
        
    }
}