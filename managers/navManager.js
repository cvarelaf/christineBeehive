class NavManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.beesComponent = document.getElementById('beesComponent');
        this.postsComponent = document.getElementById('postsComponent');
        this.commentsComponent = document.getElementById('commentsComponents');
        //Get container for bee posts, album and todos
    }

    showBees() {
        this.dataManager.bees.forEach(bee => {
            var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
        });
    }

    showPosts() {
        this.dataManager.currentBee.posts.forEach(post => {
            var postComponent = new PostComponent(post, this.postsComponent, this.dataManager);
        });
    }

    // showComments() {
    // this.dataManager.comments.forEach(comment => {
    // var commentsComponent = new commentsComponent(comment, this.commentsComponent, this.dataManager);
    // })
    // }

    showBeeAlbum() {

    }

    showBeeTodos() {

    }
}