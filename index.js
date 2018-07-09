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

	//Program Logic
	requestUsersData();
	//'https://jsonplaceholder.typicode.com/posts'
	//'https://jsonplaceholder.typicode.com/comments'
	//'https://jsonplaceholder.typicode.com/photos'
	//'https://jsonplaceholder.typicode.com/albums'
	//'https://jsonplaceholder.typicode.com/todos'

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

					var bee = new Bee(beeData.id, beeData.name, beeData.username, beeData.email, beeData.phone, new Address(addressData.city, new Geo (addressData.geo.lat,addressData.geo.lng), addressData.street, addressData.suite, addressData.zipcode));

					dataManager.bees.push(bee);
					console.log(bee);
				}

				navManager.showBees();
			}
			else {
				console.log('Server Error');
			}
		}
	}
}