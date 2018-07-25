class DataManager {

    constructor() {

        this.bees = [];
        this.posts = [];
        this.comments = [];
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
}