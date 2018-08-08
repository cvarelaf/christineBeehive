class PostComponent extends Component {
	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);

		this.container.className = 'postComponent';
		//Create Elements
		this.title = document.createElement('h3');
		this.body = document.createElement('p');
		this.addCommentBtn = document.createElement('button');

		//Add Elements
		this.container.appendChild(this.title);
		this.container.appendChild(this.body);
		this.container.appendChild(this.addCommentBtn);

		//Fill Element
		this.title.innerHTML = model.title;
		this.body.innerHTML = model.body;
		this.addCommentBtn.innerHTML = 'ADD COMMENT';

		//Add Events
		this.addCommentBtn.onclick = this.addCommentBtnClick.bind(this);

		this.addComments();
	}

	addComments() {
		this.model.comments.forEach(comment => {
			var commentComponent = new CommentComponent(comment, this.container, this.dataManager);
		});
	}

	addCommentBtnClick() {
		console.log('Show Add Comment UI-Form');
		this.dataManager.navManager.showNewCommentComponent(this.model);
	}
}