// Initialize Firebase //
var config = {
apiKey: "AIzaSyCyBk3Ao56DrRy2sovQJ9VvxamP158Nr84",
authDomain: "firstproject-731d4.firebaseapp.com",
databaseURL: "https://firstproject-731d4.firebaseio.com",
storageBucket: "firstproject-731d4.appspot.com",
messagingSenderId: "1081920125981"
};
firebase.initializeApp(config);
var database = firebase.database();

// check for logged in user

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location.href = "main.html";
  };
});


// google authentication 
var providerGoogle = new firebase.auth.GoogleAuthProvider();
// google log-in
$("#g-login").on("click", function() {
	console.log("clicked successfully");
	firebase.auth().signInWithPopup(providerGoogle).then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  // change login items to an access button
	  window.location.href = "main.html";

	}).catch(function(error) {
		console.log(error.code);
		



	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // alert login was invalid
	  // alert("Login Unsuccessful");
	});
});

var providerTwitter = new firebase.auth.TwitterAuthProvider();



$("#t-login").on("click", function() {

	firebase.auth().signInWithPopup(providerTwitter).then(function(result) {

		// This gives you a Facebook Access Token. You can use it to access the Facebook API.
		var token = result.credential.accessToken;
		// The signed-in user info.
		var user = result.user;
		// ...
		window.location.href = "main.html";

	}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
		// ...
		console.log(errorCode);

	});
});



var providerFacebook = new firebase.auth.FacebookAuthProvider();

$("#f-login").on("click", function() {

 firebase.auth().signInWithPopup(providerFacebook).then(function(result) {
  
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // 
  window.location.href = "main.html";

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  console.log(errorCode);

});

});