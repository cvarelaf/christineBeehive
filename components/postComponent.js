class PostComponent extends Component{

    constructor(model,parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'postComponent';

        //Create Elements
        this.userId = document.createElement('h1');
        this.title = document.createElement('p');
        this.body = document.createElement('p');

        //Add Elements
        this.container.appendChild(this.userId);
        this.container.appendChild(this.title);
        this.container.appendChild(this.body);

        //Fill Element
        this.userId.innerHTML = this.model.userId;
        this.title.innerHTML = this.model.title;
        this.body.innerHTML = this.model.body;

        this.container.post = this.model;
    }
}