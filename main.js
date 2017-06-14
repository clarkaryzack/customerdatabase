// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
var customers = document.getElementById("customers");

(function () {

  'use strict';

for (let i =0 ; i< 12 ; i++) {


	fetch('https://randomuser.me/api/')
	  .then(
	    function(response) {
	      if (response.status !== 200) {
	        console.log('Looks like there was a problem. Status Code: ' +
	          response.status);
	        return;
	      }

	    // Examine the text in the response
	    response.json().then(function(data) {
	      // console.log(data.results[0].name);
				let picture = data.results[0].picture.large;
				let first = data.results[0].name.first;
				let last = data.results[0].name.last;
				let fullname = first+" "+last
				let email = data.results[0].email
				let add1 = data.results[0].location.street
				let city = data.results[0].location.city
				let state = data.results[0].location.state
				let zip = data.results[0].location.zip
				let add2 = city+" "+state+" "+zip
				let cell = data.results[0].cell


	      let markup = `
						<ul>
	            <img src=${picture}>
	            <div class="name">${fullname}</div>
	            <div class="email">${email}</div>
	            <li>${add1}</li>
	            <li>${add2}</li>
	            <li>${cell}</li>
						</ul>
	        `;


					var customers = document.getElementById("customers")
					customers.innerHTML += markup;

	    //let's set up the HTML
	    //characters as array then as li
    });
  }
)

}

})();
