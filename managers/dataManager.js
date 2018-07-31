class DataManager {

    constructor() {

        this.bees = [];
        this.posts = [];
        this.comments = [];
        this.albums = [];
        this.photos = [];
        this.currentBee = null;
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
}