class PostComponent extends Component {

    constructor(model, parent, dataManager) {
        super(model, parent, dataManager);

        this.container.className = 'postComponent';

        //Create Elements
        this.id = document.createElement('h3');
        this.title = document.createElement('p');
        this.body = document.createElement('p');
        this.addCommentBtn = document.createElement('button');

        //Add Elements
        this.container.appendChild(this.id);
        this.container.appendChild(this.title);
        this.container.appendChild(this.body);
        this.container.appendChild(this.addCommentBtn);

        //Fill Element
        this.id.innerHTML = 'PostId: ' + this.model.id;
        this.title.innerHTML = 'Title: ' + this.model.title;
        this.body.innerHTML = 'Body: ' + this.model.body;
        this.addCommentBtn.innerHTML = 'ADD COMMENT';

        //Add Events
		this.addCommentBtn.onclick = this.addCommentBtnClick;

        this.addComments();

    }

    addComments() {
        for (let i = 0; i < this.model.comments.length; i++) {
            var commentComponent = new CommentComponent(this.model.comments[i], this.container, this.dataManager);
        }
    }

    addCommentBtnClick() {
		console.log('Show Add Comment UI-Form');

	}
}