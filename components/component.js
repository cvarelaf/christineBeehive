class Component {
    constructor(model, parent, dataManager) {
		this.model = model;
		this.parent = parent;
		this.dataManager = dataManager;

		if (this.parent) {
			this.container = document.createElement('div');
			this.parent.appendChild(this.container);
		}
	}
}