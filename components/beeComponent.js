class BeeComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.container.className = 'beeComponent';

		//Create Elements
		this.title = document.createElement('h1');
		this.username = document.createElement('p');
		this.email = document.createElement('p');
		this.phone = document.createElement('p');
		this.city = document.createElement('p');
		this.posts = document.createElement('p');
		this.photos = document.createElement('p');
		this.todos = document.createElement('p');
		this.postsBtn = document.createElement('button');
		this.albumBtn = document.createElement('button');
		this.todosBtn = document.createElement('button');

		//Add Elements
		this.container.appendChild(this.title);
		this.container.appendChild(this.username);
		this.container.appendChild(this.email);
		this.container.appendChild(this.phone);
		this.container.appendChild(this.city);
		this.container.appendChild(this.posts);
		this.container.appendChild(this.photos);
		this.container.appendChild(this.todos);
		this.container.appendChild(this.postsBtn);
		this.container.appendChild(this.albumBtn);
		this.container.appendChild(this.todosBtn);

		//Fill Element
		this.title.innerText = this.model.name;
		this.username.innerText = this.model.username;
		this.email.innerText = this.model.email;
		this.phone.innerText = this.model.phone;
		this.city.innerText = this.model.address.city + ', ' + this.model.address.street + ', ' + this.model.address.zipcode;
		this.posts.innerText = 'Posts:' + this.model.posts.length;
		this.photos.innerText = 'Photos:0';// + this.model.album.photos.length;
		this.todos.innerText = 'Todos:' + this.model.todos.length;
		this.postsBtn.innerHTML = 'POSTS';
		this.albumBtn.innerHTML = 'ALBUM';
		this.todosBtn.innerHTML = 'TODOS';

		//Add Events
		this.postsBtn.onclick = this.postsBtnClick.bind(this);
		this.albumBtn.onclick = this.albumBtnClick.bind(this);
		this.todosBtn.onclick = this.todosBtnClick.bind(this);
		// this.container.bee = this.model;
	}

	postsBtnClick(e) {
		this.dataManager.showBeePosts(this.model);
	}

	albumBtnClick(e) {
		this.dataManager.showBeeAlbums(this.model);
	}

	todosBtnClick(e) {
		this.dataManager.showBeeTodos(this.model);
	}


}