
// !IMPORTANT: REPLACE WITH YOUR OWN CONFIG OBJECT BELOW


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDac2UTf2CarhdpM_1qwyjBlxn_C7CiK_Y",
  authDomain: "fir-crud-and-javascript.firebaseapp.com",
  databaseURL: "https://fir-crud-and-javascript.firebaseio.com",
  projectId: "fir-crud-and-javascript",
  storageBucket: "fir-crud-and-javascript.appspot.com",
  messagingSenderId: "234601781454"
};

firebase.initializeApp(config);

// Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');


readUserData(); 
	

// --------------------------
// READ
// --------------------------
function readUserData() {

	const userListUI = document.getElementById("user-list");

	usersRef.on("value", snap => {

		userListUI.innerHTML = ""

		snap.forEach(childSnap => {

			let key = childSnap.key,
				value = childSnap.val()
  			
			let $li = document.createElement("li");

			$li.innerHTML = value.name;

			$li.setAttribute("user-key", key);
			$li.addEventListener("click", userClicked)
			userListUI.append($li);

 		});


	})

}



function userClicked(e) {


		var userID = e.target.getAttribute("user-key");

		const userRef = dbRef.child('users/' + userID);
		const userDetailUI = document.getElementById("user-detail");

		userRef.on("value", snap => {

			userDetailUI.innerHTML = ""

			snap.forEach(childSnap => {
				var $p = document.createElement("p");
				$p.innerHTML = childSnap.key  + " - " +  childSnap.val();
				userDetailUI.append($p);
			})

		});
	

}





        








