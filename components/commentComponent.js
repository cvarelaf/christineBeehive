class CommentComponent extends Component {

    constructor(model, parent, dataManager) {
        super(model, parent, dataManager);
        this.container.className = 'commentComponent';

        //Create Elements
        this.postId = document.createElement('h1');
        this.id = document.createElement('p');
        this.name = document.createElement('p');
        this.email = document.createElement('p');
        this.body = document.createElement('p');

        //Add Elements
        this.container.appendChild(this.postId);
        this.container.appendChild(this.id);
        this.container.appendChild(this.name);
        this.container.appendChild(this.email);
        this.container.appendChild(this.body);

        //Fill Element
        this.postId.innerHTML = this.model.postId;
        this.id.innerHTML = this.model.id;
        this.name.innerHTML = this.model.name;
        this.email.innerHTML = this.model.email;
        this.body.innerHTML = this.model.body;

        //this.container.post = this.model;
    }
}