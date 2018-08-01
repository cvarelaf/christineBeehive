class DataManager {

    constructor() {

        this.bees = [];
		this.currentBee = null;
		this.navManager = null;
    }

    setCurrentBee(bee) {
        this.currentBee = bee;
    }

    addPostToBee(post) {
        this.bees.forEach(function (bee) {
            //function recibiendoBee(bee)
            if (bee.id == post.userId) {
                bee.posts.push(post);
                return;
            }
        });
    }

    addCommentToPost(comment) {
        this.bees.forEach(function (bee) {
            bee.posts.forEach(function (post) {
                if (post.id == comment.postId) {
                    post.comments.push(comment);
                    return;
                }
            });
        });
    }

    addAlbumToBee(album) {
        this.bees.forEach(function (bee) {
            //function recibiendoBee(bee)
            if (bee.id == album.userId) {
                bee.albums.push(album);
                return;
            }
        });
    }

    addPhotoToAlbum(photo) {
        this.bees.forEach(function (bee) {
            bee.albums.forEach(function (album) {
                if (album.id == photo.albumId) {
                    album.photos.push(photo);
                    return;
                }
            });
        });
    }

    addToDoToBee(todo) {
        this.bees.forEach(function (bee) {
            //function recibiendoBee(bee)
            if (bee.id == todo.userId) {
                bee.todos.push(todo);
                return;
            }
        });
    }

	showBeePosts(bee) {
        this.currentBee = bee;
        this.navManager.showBeePosts();
	}

	showBeeAlbums(bee) {
		this.currentBee = bee;
		this.navManager.showBeeAlbums();
	}

	showBeeTodos(bee) {
		this.currentBee = bee;
		this.navManager.showBeeTodos();
	}
}