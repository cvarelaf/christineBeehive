/**
* @name NewPostComponent
* @extends
* @file newPostComponent.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class NewPostComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.title = document.getElementById('newPostComponentTitle');
		this.body = document.getElementById('newPostComponentBody');
		this.okBtn = document.getElementById('newPostComponentOKBtn');
		this.cancelBtn = document.getElementById('newPostComponentCancelBtn');
		this.container = document.getElementById('newPostComponent');

		this.okBtn.onclick = this.okBtnClick.bind(this);
		this.cancelBtn.onclick = this.cancelBtnClick.bind(this);

		this.postCounter = 1000000;
	}

	show() {
		this.container.hidden = false;
	}

	hide() {
		this.container.hidden = true;
	}

	okBtnClick(e) {
		//Add new Post
		this.postCounter++;
		var newPost = new Post(this.postCounter, this.dataManager.currentBee.id, this.title.value, this.body.value);
		this.dataManager.currentBee.posts.push(newPost)
		this.hide();
		this.dataManager.navManager.showBeePosts();
	}

	cancelBtnClick(e) {
		console.log('hide');
		this.hide();
		this.dataManager.navManager.showBeePosts();
	}
}