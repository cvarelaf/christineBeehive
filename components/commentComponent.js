class CommentComponent extends Component {

    constructor(model, parent, dataManager) {
        super(model, parent, dataManager);
        this.container.className = 'commentComponent';

        //Create Elements
        this.id = document.createElement('p');
        this.name = document.createElement('p');
        this.email = document.createElement('p');
        this.body = document.createElement('p');

        //Add Elements
        this.container.appendChild(this.id);
        this.container.appendChild(this.name);
        this.container.appendChild(this.email);
        this.container.appendChild(this.body);

        //Fill Element
        this.id.innerHTML =  'UserId: ' + this.model.id;
        this.name.innerHTML =  'Name: ' + this.model.name;
        this.email.innerHTML =  'Email: ' + this.model.email;
        this.body.innerHTML =  'Body: ' + this.model.body;

        //this.container.post = this.model;
    }
}