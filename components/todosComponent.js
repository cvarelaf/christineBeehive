class ToDosComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);

		this.todosList = [];
		this.container.className = 'todosComponent';

		this.addToDoBtn = document.createElement('button');
		this.todosContainer = document.createElement('div');

		this.addToDoBtn.innerHTML = 'ADD TODO';

		this.container.appendChild(this.addToDoBtn);
		this.container.appendChild(this.todosContainer);

		this.addToDoBtn.onclick = this.addToDoBtnClick.bind(this);
	}

	showBeeTodos() {
		this.todosContainer.innerHTML = '';
		this.todosList = [];

		this.dataManager.currentBee.todos.forEach(todo => {

			var todoComponent = new ToDoComponent(todo, this.todosContainer, this.dataManager);

			this.todosList.push(todoComponent);
		});

		if (this.dataManager.user.id != this.dataManager.currentBee.id) {
			this.addToDoBtn.hidden = true;
		} else {
			this.addToDoBtn.hidden = false;
		}
	}

	addToDoBtnClick(e) {
		this.hide();
		this.dataManager.navManager.showNewToDoComponent();
	}
}