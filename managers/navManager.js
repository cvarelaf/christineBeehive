class NavManager {

	constructor(dataManager) {
		this.dataManager = dataManager;
		this.beesComponent = document.getElementById('beesComponent');
		this.appComponent = document.getElementById('appComponent');
        this.postsComponent = new PostsComponent(null, this.appComponent, this.dataManager);
		this.albumsComponent = document.getElementById('albumComponent');
		this.todosComponent = document.getElementById('todosComponent');
		this.newPostComponent = new NewPostComponent(null, this.appComponent, dataManager);
		this.newCommentComponent = new NewCommentComponent(null, this.appComponent, this.dataManager);
		this.newPostComponent.hide();
		this.newCommentComponent.hide();

	}

	showBees() {
		this.dataManager.bees.forEach(bee => {
			var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
		});
		this.showBeePosts();
	}

	showBeePosts() {
		this.postsComponent.container.hidden = false;
		this.albumsComponent.hidden = true;
		this.todosComponent.hidden = true;
		this.newPostComponent.hide();
		this.postsComponent.showBeePosts();
	}

	showBeeAlbums() {
        this.postsComponent.hide();
        this.albumsComponent.hidden = false;
        this.todosComponent.hidden = true;
        this.newPostComponent.hide();
        this.albumsComponent.innerHTML = 'ALBUMs';
        this.dataManager.currentBee.albums.forEach(album => {
            var albumComponent = new AlbumComponent(album, this.albumsComponent, this.dataManager);
        });
	}

	showBeeTodos() {
        this.postsComponent.hide();
        this.albumsComponent.hidden = true;
        this.todosComponent.hidden = false;
        this.newPostComponent.hide();
        this.todosComponent.innerHTML = 'TODOs';
        this.dataManager.currentBee.todos.forEach(todo => {
            var todoComponent = new ToDoComponent(todo, this.todosComponent, this.dataManager);
        });
	}

	showNewPostComponent() {
		this.albumsComponent.hidden = true;
		this.todosComponent.hidden = true;
		this.newPostComponent.show();
	}

	showNewCommentComponent(post) {
		this.postsComponent.container.hidden = true;
		this.albumsComponent.hidden = true;
		this.todosComponent.hidden = true;
		this.newPostComponent.hide();
		this.newCommentComponent.model = post;
		this.newCommentComponent.show();
	}
}

