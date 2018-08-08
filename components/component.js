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
	show() {
		this.container.hidden = false;
	}
	hide() {
		this.container.hidden = true;
	}
}