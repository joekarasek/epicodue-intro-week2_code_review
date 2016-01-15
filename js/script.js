// object for holding the user input values
var mySite = {};

$(document).ready(function(){

  // event handler form field one submit - user name
  $('#formFieldOneSubmit').click(function(event){
    // variables
    var userNameInput = $('input#userName').val();
    // check to make sure a name was entered, then assign input to global userName
    if (userNameInput === "") {
      alert('Please enter a name to continue');
      return;
    } else {
      // assign value
      mySite.userName = userNameInput;
      // hide this form and reveal the next one
      $('#formOne').addClass('hidden');
      $('#formTwo').removeClass('hidden');
    };
    // fix problem with submit
    event.preventDefault();
  });

  // event handler form field two submit - userEmail
  $('#formFieldTwoSubmit').click(function(event){
    // variables
    var userEmailInput = $('input#userEmail').val();
    // check to make sure an email was entered, then assign assign to global userEmail
    if (userEmailInput === "") {
      alert('Please enter an email address');
      return;
    } else {
      mySite.userEmail = userEmailInput;
      // hide this form and reveal the next one
      $('#formTwo').addClass('hidden');
      $('#formThree').removeClass('hidden');
    };
    // fix problem with submit
    event.preventDefault();
  });

  // event handler form field three submit - userGroupType
  $('#formFieldThreeSubmit').click(function(event){
    // variables
    var userGroupTypeInput = $('input[name="optionGroupType"]:checked').val();
    // check to make sure a name was entered, then assign assign to global userName
    if (userGroupTypeInput === undefined) {
      alert('Please pick one of the options');
      return;
    } else {
      mySite.userGroupType = userGroupTypeInput;
      // hide this form and reveal the next one
      $('#formThree').addClass('hidden');
      $('#formFour').removeClass('hidden');
    };
    // fix problem with submit
    event.preventDefault();
  });

  // event handler form field four submit - userGroupType
  $('#formFieldFourSubmit').click(function(event){
    // variables
    var userClimatePreferenceInput = $('input[name="optionClimatePreference"]:checked').val();
    // check to make sure a name was entered, then assign assign to global userName
    if (userClimatePreferenceInput === undefined) {
      alert('Please pick one of the options');
      return;
    } else {
      mySite.userClimatePreference = userClimatePreferenceInput;
      // hide this form and reveal the next one
      $('#formFour').addClass('hidden');
      $('#formFive').removeClass('hidden');
    };
    // fix problem with submit
    event.preventDefault();
  });

  // event handler form field four submit - userGroupType
  $('#formFieldFiveSubmit').click(function(event){
    // variables
    var userDispositionInput = $('input[name="optionDisposition"]:checked').val();
    // check to make sure a name was entered, then assign assign to global userName
    if (userDispositionInput === undefined) {
      alert('Please pick one of the options');
      return;
    } else {
      mySite.userDisposition = userDispositionInput;
    };
    // fix problem with submit
    event.preventDefault();
  });

});
