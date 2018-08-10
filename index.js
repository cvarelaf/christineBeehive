/**
* @name index.js
* @file Una parctica para analizar json obtenido de un API y estraer su estructura de datos y parsearlos a objectos ES6.
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/

window.addEventListener('load', init, false);

function init() {
	//Declare variables
	var dataManager = new DataManager();
	var navManager = new NavManager(dataManager);
	dataManager.navManager = navManager;

	//Program Logic
	requestUsersData();

	function requestUsersData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
		request.onreadystatechange = requestUsersDataCompleted;
		request.send();
	}

	function requestUsersDataCompleted(e) {
		var request = e.target;
		// console.log(JSON.parse(request.responseText));
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {

				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);
				for (var key in data) {
					var beeData = data[key];
					var addressData = data[key].address;

					var geo = new Geo(addressData.geo.lat, addressData.geo.lng);

					var address = new Address(addressData.city, geo, addressData.street, addressData.suite, addressData.zipcode);

					var bee = new Bee(beeData.id, beeData.name, beeData.username, beeData.email, beeData.phone, new Address(addressData.city, new Geo(addressData.geo.lat, addressData.geo.lng), addressData.street, addressData.suite, addressData.zipcode));

					dataManager.bees.push(bee);

					//Hack
					dataManager.currentBee = dataManager.bees[1];
					console.log('Currently Showing ' + dataManager.currentBee.name +'\'s Posts');
				}

				requestPostsData();
				requestAlbumsData();
				requestToDosData();
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function requestPostsData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
		request.onreadystatechange = requestPostsDataCompleted;
		request.send();
	}

	function requestPostsDataCompleted(e) {
		var request = e.target;
		// console.log(JSON.parse(request.responseText));
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);
				for (var key in data) {
					var postData = data[key];
					var post = new Post(postData.userId, postData.id, postData.title, postData.body);
					dataManager.addPostToBee(post);
				}
				requestCommentsData();
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function requestCommentsData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
		request.onreadystatechange = requestCommentsDataCompleted;
		request.send();
	}

	function requestCommentsDataCompleted(e) {
		var request = e.target;
		// console.log(JSON.parse(request.responseText));
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);
				for (var key in data) {
					var commentData = data[key];
					var comment = new Comment(commentData.postId, commentData.id, commentData.name, commentData.email, commentData.body);
					dataManager.addCommentToPost(comment);
				}
				//navManager.showBees();
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function requestAlbumsData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/albums', true);
		request.onreadystatechange = requestAlbumsDataCompleted;
		request.send();
	}

	function requestAlbumsDataCompleted(e) {
		var request = e.target;
		// console.log(JSON.parse(request.responseText));
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);
				for (var key in data) {
					var albumData = data[key];
					var album = new Album(albumData.userId, albumData.id, albumData.title);
					dataManager.addAlbumToBee(album);
				}

				requestPhotosData();
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function requestPhotosData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
		request.onreadystatechange = requestPhotosDataCompleted;
		request.send();
	}

	function requestPhotosDataCompleted(e) {
		var request = e.target;
		// console.log(JSON.parse(request.responseText));
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);
				for (var key in data) {
					var photoData = data[key];
					var photo = new Photo(photoData.albumId, photoData.id, photoData.title, photoData.url, photoData.thumbnailUrl);
					dataManager.addPhotoToAlbum(photo);
				}
			}
			else {
				console.log('Server Error');
			}
			//navManager.showBees();
		}
	}

	function requestToDosData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
		request.onreadystatechange = requestToDosDataCompleted;
		request.send();
	}

	function requestToDosDataCompleted(e) {
		var request = e.target;
		// console.log(JSON.parse(request.responseText));
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				// console.log(data);
				for (var key in data) {
					var todoData = data[key];
					var todo = new ToDo(todoData.userId, todoData.id, todoData.title, todoData.completed);
					dataManager.addToDoToBee(todo);
				}
			}
			else {
				console.log('Server Error');
			}
			navManager.showBees();
		}
	}
}