class BeeComponent extends Component{
    constructor(parent){
        super(parent);
        this.container.className = 'beeComponent';

        //Add all component elements
        this.title = document.createElement('h1');
        this.userName = document.createElement('p');
        this.email = document.createElement('p');

        this.container.appendChild(this.title);
        this.container.appendChild(this.userName);
        this.container.appendChild(this.email);

        //Add Elements
        this.container.appendChild(this.title);
        this.container.appendChild(this.userName);
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
        this.title.innerHTML = this.model.name;
        this.userName.innerHTML = this.model.userName;
        this.email.innerHTML = this.model.email;
        this.phone.innerHTML = this.model.phone;
        this.city.innerHTML = this.model.city;
        this.posts.innerHTML = this.model.posts;
        this.photos.innerHTML = this.model.photos;
        this.todos.innerHTML = this.model.todos;
        this.postsBtn = document.createElement('buttom');
        this.albumBtn = document.createElement('buttom');
        this.todosBtn = document.createElement('buttom');
        
    }
}