class NavManager {

	constructor(dataManager) {
		this.dataManager = dataManager;
		this.beesComponent = document.getElementById('beesComponent');
		this.appComponent = document.getElementById('appComponent');
        this.postsComponent = new PostsComponent(null, this.appComponent, this.dataManager);
		this.albumsComponent = document.getElementById('albumComponent');
		this.todosComponent = new ToDosComponent(null, this.appComponent, this.dataManager);
		this.newPostComponent = new NewPostComponent(null, this.appComponent, this.dataManager);
		this.newCommentComponent = new NewCommentComponent(null, this.appComponent, this.dataManager);
		this.newToDoComponent = new NewToDoComponent(null, this.appComponent, this.dataManager);
		this.todosComponent.hide();
		this.newPostComponent.hide();
		this.newCommentComponent.hide();
		this.newToDoComponent.hide();

	}

	showBees() {
		this.dataManager.bees.forEach(bee => {
			var beeCompoment = new BeeComponent(bee, this.beesComponent, this.dataManager);
		});
		this.showBeePosts();
	}

	showBeePosts() {
		this.postsComponent.container.hidden = false;
		this.todosComponent.container.hidden = true;
		this.postsComponent.hidden = false;
		this.albumsComponent.hidden = true;
		this.todosComponent.hidden = true;
		this.newPostComponent.hide();
		this.newToDoComponent.hide();
		this.postsComponent.showBeePosts();
	}

	showBeeAlbums() {
		this.postsComponent.container.hidden = true;
		this.todosComponent.container.hidden = true;
        this.albumsComponent.hidden = false;
		this.postsComponent.hide();
		this.todosComponent.hide();
		this.newPostComponent.hide();
		this.newToDoComponent.hide();
        this.albumsComponent.innerHTML = 'ALBUMs';
        this.dataManager.currentBee.albums.forEach(album => {
            var albumComponent = new AlbumComponent(album, this.albumsComponent, this.dataManager);
        });
	}

	showBeeTodos() {
		this.postsComponent.container.hidden = true;
		this.todosComponent.container.hidden = false;
		this.albumsComponent.hidden = true;
		this.todosComponent.hidden = true;
		this.newPostComponent.hide();
		this.todosComponent.showBeeTodos();
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

	showNewToDoComponent() {
		this.albumsComponent.hidden = true;
		this.todosComponent.hidden = true;
		this.newToDoComponent.show();
	}
}

