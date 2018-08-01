class NavManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.beesComponent = document.getElementById('beesComponent');
        this.postsComponent = document.getElementById('postsComponent');
        this.albumsComponent = document.getElementById('albumsComponent');
        this.todosComponent = document.getElementById('todosComponent');
        this.newPostComponent = new NewPostComponent(null, null, dataManager);
        this.newPostComponent.hide();
        // this.newPostComponent.hidden = true;
        //Get container for bee posts, album and todos
    }

    showBees() {
        this.dataManager.bees.forEach(bee => {
            var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
        });

        this.showBeePosts();
    }

    showBeePosts() {
        if (this.dataManager.currentBee) {
            this.postsComponent.hidden = false;
            this.albumsComponent.hidden = true;
            this.todosComponent.hidden = true;
            this.newPostComponent.hide();
            // this.newPostComponent.hidden = true;

            this.postsComponent.innerHTML = '';
            this.postsComponent.innerHTML = 'POSTS';

            var addPostBtn = document.createElement('button');
            addPostBtn.innerHTML = 'ADD POST';
            this.postsComponent.appendChild(addPostBtn);
            addPostBtn.onclick = this.addPostBtnClick.bind(this);

            this.dataManager.currentBee.posts.forEach(post => {
                var postComponent = new PostComponent(post, this.postsComponent, this.dataManager);
            });
        }
    }

    showBeeAlbums() {
        this.postsComponent.hidden = true;
        this.albumsComponent.hidden = false;
        this.todosComponent.hidden = true;
        this.newPostComponent.hide();
        // this.newPostComponent.hidden = true;
        this.albumsComponent.innerHTML = 'ALBUM';

        this.dataManager.currentBee.albums.forEach(album => {
            var albumComponent = new AlbumComponent(album, this.albumsComponent, this.dataManager);
        });
    }

    showBeeTodos() {
        this.postsComponent.hidden = true;
        this.albumsComponent.hidden = true;
        this.todosComponent.hidden = false;
        this.newPostComponent.hide();
        // this.newPostComponent.hidden = true;
        this.todosComponent.innerHTML = 'TODOs';

        this.dataManager.currentBee.todos.forEach(todo => {
            var todoComponent = new ToDoComponent(todo, this.todosComponent, this.dataManager);
        });
    }

    addPostBtnClick(e) {
        console.log('SHOW ADD POST UI-FORM');
        this.postsComponent.hidden = true;
        this.albumsComponent.hidden = true;
        this.todosComponent.hidden = true;
        this.newPostComponent.show();
    }
}