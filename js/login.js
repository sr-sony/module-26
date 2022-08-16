// step-01: add click event handler

document.getElementById('btn-submit').addEventListener('click', function(){
    //step-02: get the email address from input id
    // always remember to use .value to get text from user input
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-03: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // caution: !!DO not verify email password on the client side
    //step-04: verify email and password and check whether valid user or not

    if(email === 'sontan@bap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please enter correct password');
    }

    // if(email === "sontan@bap.com" && password === "secret"){
    //     console.log('valid user');
    // }
    // else{
    //     console.log('invalid user');
    // }
})