

//SignUp 
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.querySelector('#signup-email').value;
  const password = document.querySelector('#signup-password').value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {

      // clear the form
      signupForm.reset();

      // close the modal
      $('#signupModal').modal('hide')
      console.log('signup');
    })
});

//signin
const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {

      // clear the form
      signinForm.reset();

      // close the modal
      $('#signinModal').modal('hide')
      console.log('signin');
    })
});

const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
  e.preventDefault();
  auth
  .signOut()
  .then(() => {
    console.log('sign out');
  })
});


// Google Login
const googleButton = document.querySelector('#googleLogin');
googleButton.addEventListener('click', e => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
      .then(result => {
        console.log('google sign in');
         // clear the form
        signupForm.reset();

        // close the modal
        $('#signupModal').modal('hide')
      })
      .catch(err => {
        console.log(err);
      })
});



