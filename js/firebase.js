var config = {
                apiKey: "AIzaSyDhfQblwsSixSQVA-Lp1b6STfmsKMBFWpk",
                authDomain: "unblock-web-project.firebaseapp.com",
                databaseURL: "https://unblock-web-project.firebaseio.com",
                projectId: "unblock-web-project",
                storageBucket: "unblock-web-project.appspot.com",
                messagingSenderId: "616494762242"
            };
            firebase.initializeApp(config);
            
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithRedirect(provider);

let auth = firebase.auth();
auth.onStateChanged(user => {
    if (user) {
        signedIn();
    }
    else {
        signedOut();
    }
});

function signedIn() {
  document.getElementById('all-div').classList = 'hidden';
  document.getElementById('decoy-div').classList = 'visible';
  document.getElementById("login-div").classList = 'hidden';
  document.getElementById('signedOutNotif').style.display = "none";
}

function signedOut() {
  alert("Your request did not go through. Please try again.");
  document.getElementById('signedOutNotif').style.display = "block";
}
  
