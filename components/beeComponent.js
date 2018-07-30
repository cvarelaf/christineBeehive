class BeeComponent extends Component {

    constructor(model, parent, dataManager) {
        super(model, parent, dataManager);
        this.container.className = 'beeComponent';

        //Create Elements
        this.name = document.createElement('h1');
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
        this.container.appendChild(this.name);
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
        this.name.innerHTML = this.model.name;
        this.username.innerHTML = this.model.username;
        this.email.innerHTML = this.model.email;
        this.phone.innerHTML = this.model.phone;
        this.city.innerHTML = this.model.address.city;
        this.posts.innerHTML = 'Posts:' + this.model.posts.length;
        this.photos.innerHTML = 'Photos: ' + this.model.album.length;
        this.todos.innerHTML = 'Todos: 0'; //this.model.todos.lenght;
        this.postsBtn.innerHTML = 'POSTS';
        this.albumBtn.innerHTML = 'ALBUM';
        this.todosBtn.innerHTML = 'TODOS';

        this.postsBtn.onclick = this.postsBtnClick.bind(this);

        this.container.bee = this.model;
    }

    postsBtnClick(e) {
        this.dataManager.setCurrentBee(this.model);
    }
}