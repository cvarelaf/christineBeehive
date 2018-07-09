/**
* @name Bee
* @extends
* @file bee.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class Bee {

	constructor(id, name, username, email, address) {
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
		this.address = address;
		this.posts = [];
		this.album = null;
		this.todos = [];
	}

	comer(){
		
	}
}