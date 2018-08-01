class PhotoComponent extends Component {

    constructor(model, parent, dataManager) {
        super(model, parent, dataManager);
        this.container.className = 'photoComponent';

        //Create Elements
        this.id = document.createElement('p');
        this.title = document.createElement('p');
        this.url = document.createElement('p');

        //Add Elements
        this.container.appendChild(this.id);
        this.container.appendChild(this.title);
        this.container.appendChild(this.url);

        //Fill Element
        this.id.innerHTML =  'PhotoId: ' + this.model.id;
        this.title.innerHTML =  'Title: ' + this.model.title;
        this.url.innerHTML =  "<img src=\"" + this.model.url + " width=\"100px\" height=\"100px\">";
    }
}