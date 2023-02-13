// step :- 1 add click handler with the submit button
    document.getElementById('btn-submit').addEventListener('click', function(){
    // step :- 2 get the email address inside the mail input field
    // alwas rememberto to use. Value to get the text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step :- 3 get password
    // 3.a:> set id on the html elemet
    // 3.b:> get the element
    // 3.c:> get the value from the elemet
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;


    /*=============> DANGER <============ */
    //DO not varify Email and Password the client site
    // step :- 4 varify email and password and check whether valid user or not valid user
    if(email === "saifularafat@gmail.com" && password === "Saiful3434"){
        window.location.href = 'bank.html'
    } else{
        alert('Tui Password kibabe bole jaite paros seta bool!.')
    }
})