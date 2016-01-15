$(document).ready(function(){
  // global variables
  var userName = "";
  var userEmail = "";

  // event handler form field one submit - user name
  $('#formFieldOneSubmit').click(function(event){
    // variables
    var userNameInput = $('input#userName').val();
    // check to make sure a name was entered, then assign assign to global userName
    if (userNameInput === "") {
      alert('Please enter a name to continue');
      return;
    } else {
      userName = userNameInput;
    };
    // fix problem with submit
    event.preventDefault();
  });
  // event handler form field two submit - user email
  $('#formFieldTwoSubmit').click(function(event){
    // variables
    var userEmailInput = $('input#userEmail').val();
    // check to make sure a name was entered, then assign assign to global userName
    if (userEmailInput === "") {
      alert('Please enter an email address');
      return;
    } else {
      userEmail = userEmailInput;
    };
    // fix problem with submit
    event.preventDefault();
  });
});
