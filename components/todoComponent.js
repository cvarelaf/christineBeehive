class ToDoComponent extends Component {

    constructor(model, parent, dataManager) {
        super(model, parent, dataManager);
        
        this.container.className = 'todoComponent';

        //Create Elements
        this.id = document.createElement('h3');
        this.title = document.createElement('p');
        this.completed = document.createElement('p');

        //Add Elements
        this.container.appendChild(this.id);
        this.container.appendChild(this.title);
        this.container.appendChild(this.completed);
        
        //Fill Element
        this.id.innerHTML = 'ToDo ID: ' + this.model.id;
        this.title.innerHTML = 'Title: ' + this.model.title;
        this.completed.innerHTML = 'Status: ' + this.model.completed;
    }

    addToDoBtnClick() {
		console.log('Show ToDo UI-Form');
	}
}