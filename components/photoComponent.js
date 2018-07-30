class PhotoComponent extends Component {

    constructor(model, parent, dataManager) {
        super(model, parent, dataManager);
        this.container.className = 'photoComponent';

        //Create Elements
        this.albumId = document.createElement('h1');
        this.id = document.createElement('p');
        this.title = document.createElement('p');
        this.url = document.createElement('p');
        this.thumbnailUrl = document.createElement('p');

        //Add Elements
        this.container.appendChild(this.albumId);
        this.container.appendChild(this.id);
        this.container.appendChild(this.title);
        this.container.appendChild(this.url);
        this.container.appendChild(this.thumbnailUrl);

        //Fill Element
        this.albumId.innerHTML = this.model.albumId;
        this.id.innerHTML = this.model.id;
        this.title.innerHTML = this.model.title;
        this.url.innerHTML = this.model.url;
        this.thumbnailUrl.innerHTML = this.model.thumbnailUrl;

        //this.container.post = this.model;
    }
}