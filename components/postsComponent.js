class PostsComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);

		this.postsList = [];
		this.container.className = 'postsComponent';

		this.addPostBtn = document.createElement('button');
		this.postsContainer = document.createElement('div');

		this.addPostBtn.innerHTML = 'ADD POST';

		this.container.appendChild(this.addPostBtn);
		this.container.appendChild(this.postsContainer);

		this.addPostBtn.onclick = this.addPostBtnClick.bind(this);
	}

	showBeePosts() {
		this.postsContainer.innerHTML = '';
		this.postsList = [];

		this.dataManager.currentBee.posts.forEach(post => {

			var postComponent = new PostComponent(post, this.postsContainer, this.dataManager);

			this.postsList.push(postComponent);
		});

		if (this.dataManager.user.id != this.dataManager.currentBee.id) {
			this.addPostBtn.hidden = true;
		} else {
			this.addPostBtn.hidden = false;
		}

		this.changePostComponentColor(9, 'blueColor');
	}

	changePostComponentColor(index, className) {
		this.postsList[index].container.classList.add(className);
	}

	addPostBtnClick(e) {
		this.hide();
		this.dataManager.navManager.showNewPostComponent();
	}
}