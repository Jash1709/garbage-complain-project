const firebaseConfig = {
    apiKey: "AIzaSyAHulvliwBoLxv9TiGPvXGjrIMPo1bVfBs",
    authDomain: "mini-project-acbef.firebaseapp.com",
    projectId: "mini-project-acbef",
    storageBucket: "mini-project-acbef.appspot.com",
    messagingSenderId: "919915545532",
    appId: "1:919915545532:web:d856cb2268f2739ad921b9",
    measurementId: "G-ECQ2TNBM5S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig);
 

  	
// Reference messages collection
    var messagesRef = firebase.database().ref('contactformmessages');

    $('#complaint-form').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.name').val(),
        email: $('.email').val(),
        date: $('.date').val(),
        address: $('.address').val(),
        ward: $('.ward').val(),
        image: $('.image').val()
        

    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});