class NavManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.beesComponent = document.getElementById('beesComponent');
        this.postsComponent = document.getElementById('postsComponent');
        this.albumsComponent = document.getElementById('albumsComponent');
        this.todosComponent = document.getElementById('todosComponent');
        //Get container for bee posts, album and todos
    }

    showBees() {
        this.dataManager.bees.forEach(bee => {
            var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
            console.log(bee);
        });
    }

    showPosts() {
        this.dataManager.currentBee.posts.forEach(post => {
            var postComponent = new PostComponent(post, this.postsComponent, this.dataManager);
        });
    }

    showBeeAlbum() {
        this.dataManager.currentBee.albums.forEach(album => {
            var albumComponent = new AlbumComponent(album, this.albumsComponent, this.dataManager);
        });
    }

    showBeeTodos() {
        this.dataManager.currentBee.todos.forEach(todo => {
            var todoComponent = new ToDoComponent(todo, this.todosComponent, this.dataManager);
        });
    }
}