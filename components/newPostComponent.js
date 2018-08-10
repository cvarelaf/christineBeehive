class NewPostComponent extends Component {

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

		this.container.className = 'newPostComponent';

		this.title.placeholder = 'Post Title';
		this.body.placeholder = 'Body';
		this.okBtn.innerHTML = 'OK';
		this.cancelBtn.innerHTML = 'CANCEL';

		this.okBtn.onclick = this.okBtnClick.bind(this);
		this.cancelBtn.onclick = this.cancelBtnClick.bind(this);

		this.postCounter = 1000000;
	}

	okBtnClick(e) {
		//Add new Post
		e.preventDefault();
		this.postCounter++;
		var newPost = new Post(this.postCounter, this.dataManager.currentBee.id, this.title.value, this.body.value);
		this.dataManager.currentBee.posts.push(newPost)
		this.hide();
		this.dataManager.navManager.showBeePosts();
		this.clearForm();
	}

	cancelBtnClick(e) {
		e.preventDefault();
		this.hide();
		this.dataManager.navManager.showBeePosts();
		this.clearForm();
	}

	clearForm() {
		this.form.reset();
	}
}