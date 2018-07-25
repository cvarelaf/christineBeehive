/**
* @name Comment
* @extends
* @file album.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class Comment {
	constructor(postId, id, name, email, body) {
        this.postId = postId;
        this.id = id;
        this.name = name;
        this.email = email;
		this.body = body;
    }
    
}