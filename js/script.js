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
    name: "Cancun, Mexico",
    description: "All the singles like to go to Cancun, Mexico.",
    imgURL: "img/breck.jpg"
  },
  thcf: {
    name: "Disneyland, Florida",
    description: "Discover the magic of Mickey Mouse.",
    imgURL: "img/breck.jpg"
  },
  tc: {
    name: "Breckenridge, Colorado",
    description: "Oh so cold and wonderful...",
    imgURL: "img/breck.jpg"
  },
  ahs: {
    name: "Thailand",
    description: "What could be better than the beach in Thailand?",
    imgURL: "img/breck.jpg"
  },
  ahcf: {
    name: "Australia",
    description: "Take your loved one(s) to Australia, the Land-Down_Under.",
    imgURL: "img/breck.jpg"
  },
  acsc: {
    name: "Antartica",
    description: "Is there any place better for adventure than Antartica?",
    imgURL: "img/breck.jpg"
  },
  acf: {
    name: "Scandanavia",
    description: "Take your family on a great adventure to see northern Europe.",
    imgURL: "img/breck.jpg"
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

  // event handler form field fifth submit - userDisposition
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

  // event handler form field six submit - determines and reveals results
  $('#formFieldSixSubmit').click(function(event){
    // variables
    var result = {};

    // branching tree to determine results, 7 possible out of 12 permutations
    if (mySite.userDisposition === "traditionalist") {
      // branch one, all traditionalist
      if (mySite.userClimatePreference === 'cold') {
        // traditionalist who like it cold
        result.name = myDestinations.tc.name;
        result.description = myDestinations.tc.description;
        result.imgURL = myDestinations.tc.imgURL;
      } else {
        // traditionalist who like it hot
        if (mySite.userGroupType === 'single') {
          result.name = myDestinations.ths.name;
          result.description = myDestinations.ths.description;
          result.imgURL = myDestinations.ths.imgURL;
        } else {
          // both couple and family groupType
          result.name = myDestinations.thcf.name;
          result.description = myDestinations.thcf.description;
          result.imgURL = myDestinations.thcf.imgURL;
        };
      };
    } else {
      // branch two, all adventurer
      if (mySite.userClimatePreference === 'hot') {
        // adventurers who like it hot
        if (mySite.userGroupType === 'single') {
          //single
          result.name = myDestinations.ahs.name;
          result.description = myDestinations.ahs.description;
          result.imgURL = myDestinations.ahs.imgURL;
        } else {
          //couple and family
          result.name = myDestinations.ahcf.name;
          result.description = myDestinations.ahcf.description;
          result.imgURL = myDestinations.ahcf.imgURL;
        };
      } else {
        // adventurers who like it cold
        if (mySite.userGroupType === 'single' || mySite.userGroupType === 'couple') {
          //single or couple
          result.name = myDestinations.acsc.name;
          result.description = myDestinations.acsc.description;
          result.imgURL = myDestinations.acsc.imgURL;
        } else {
          // families
          result.name = myDestinations.acf.name;
          result.description = myDestinations.acf.description;
          result.imgURL = myDestinations.acf.imgURL;
        };
      };
    };

    // populate results container
    $('#resultLeadIn').append(mySite.userName + ", your're ideal travel destination is...");
    $('#resultName').append(result.name);
    $('#resultDescription').append(result.description);
    $('#resultImg').attr("src", result.imgURL);

    // fix problem with submit
    event.preventDefault();
  });

});
