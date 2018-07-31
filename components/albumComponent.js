class AlbumComponent extends Component {

    constructor(model, parent, dataManager) {
        super(model, parent, dataManager);

        this.container.className = 'albumComponent';

        //Create Elements
        this.id = document.createElement('h3');
        this.title = document.createElement('p');

        //Add Elements
        this.container.appendChild(this.id);
        this.container.appendChild(this.title);

        //Fill Element
        this.id.innerHTML = 'Album ID: ' + this.model.id;
        this.title.innerHTML = 'Title: ' + this.model.title;

        this.addPhotos();

    }

    addPhotos() {
        for (let i = 0; i < this.model.photos.length; i++) {
            var photoComponent = new PhotoComponent(this.model.photos[i], this.container, this.dataManager);
        }
    }
}