class NewToDoComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);

		this.form = document.createElement('form');
		this.title = document.createElement('input');
		this.select = document.createElement('select');
		this.true = document.createElement('option');
		this.false = document.createElement('option');
		this.okBtn = document.createElement('button');
		this.cancelBtn = document.createElement('button');

		this.container.appendChild(this.form);
		this.form.appendChild(this.title);
		this.form.appendChild(this.select);
		this.form.appendChild(this.okBtn);
		this.form.appendChild(this.cancelBtn);

		this.select.appendChild(this.true);
		this.select.appendChild(this.false);

		this.container.className = 'newToDoComponent';

		this.title.placeholder = 'Title';
		this.true.innerHTML = 'True';
		this.false.innerHTML = 'False';
		this.okBtn.innerHTML = 'OK';
		this.cancelBtn.innerHTML = 'CANCEL';

		this.okBtn.onclick = this.okBtnClick.bind(this);
		this.cancelBtn.onclick = this.cancelBtnClick.bind(this);

		this.todoCounter = 0;
	}

	okBtnClick(e) {
		//Add new Post
		e.preventDefault();
		this.todoCounter++;
		var newToDo = new ToDo(this.dataManager.currentBee.id, this.todoCounter, this.title.value, this.select.value);
		this.dataManager.currentBee.todos.push(newToDo)
		this.hide();
		this.dataManager.navManager.showBeeTodos();
		this.clearForm();
	}

	cancelBtnClick(e) {
		e.preventDefault();
		this.hide();
		this.dataManager.navManager.showBeeTodos();
		this.clearForm();
	}

	clearForm() {
		this.form.reset();
	}
}