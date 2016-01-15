// object for holding the user input values
var mySite = {};
var myDestinations = {
  // location objects named based on matching qualifiers from the three inputs: groupType, climate, and disposition
  // groupType can be s for single, c for couple, f for family
  // climate can be h for hot and c for cold
  // disposition can be t for traditionalist and a for adventurer
  // object names are constructed using disposition + climate + groupType
  // for example, ths = traditionalist who like hot climates and are single
  // object may catch several possible answer permutations
  //for example, thcf = traditionalist who like hot climates and are either a couple or family
  ths: {
    name: "Cancun, Mexico"
  },
  disneyLandFlorido: {
    name: "Disneyland, Florida"
  },
  breckenridgeColorado: {
    name: "Breckenridge, Colorado"
  },
  disneyLandFlorido: {
    name: "Disneyland, Florida"
  },
  disneyLandFlorido: {
    name: "Disneyland, Florida"
  },
  disneyLandFlorido: {
    name: "Disneyland, Florida"
  }
};

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
      // hide this form and reveal submit button to see results
      $('#formFive').addClass('hidden');
      $('#formSix').removeClass('hidden');
    };
    // fix problem with submit
    event.preventDefault();
  });

});
