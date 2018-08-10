class NewCommentComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);

		this.form = document.createElement('form');
		this.title = document.createElement('input');
		this.body = document.createElement('input');
		this.okBtn = document.createElement('button');
		this.cancelBtn = document.createElement('button');

		this.container.appendChild(this.form);
		this.form.appendChild(this.title);
		this.form.appendChild(this.body);
		this.form.appendChild(this.okBtn);
		this.form.appendChild(this.cancelBtn);

		this.container.className = 'newCommentComponent';

		this.title.placeholder = 'Comment Title';
		this.body.placeholder = 'Body';
		this.okBtn.innerHTML = 'OK';
		this.cancelBtn.innerHTML = 'CANCEL';

		this.okBtn.onclick = this.okBtnClick.bind(this);
		this.cancelBtn.onclick = this.cancelBtnClick.bind(this);
		this.commentCounter = 10000000;
	}

	okBtnClick(e) {
		//Add new comment
		e.preventDefault();
		this.commentCounter++;
		var comment = new Comment(this.commentCounter, this.dataManager.user.id, this.title.value, this.dataManager.user.email, this.body.value);
		this.model.comments.push(comment);

		this.hide();

		this.dataManager.navManager.showBeePosts();

		this.clearForm();

		this.model = null;
	}

	cancelBtnClick(e) {
		e.preventDefault();
		this.hide();
		this.dataManager.navManager.showBeePosts();
		this.clearForm();
		this.model = null;
	}

	clearForm() {
		this.form.reset();
	}
}