function validateForm() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let dob = document.getElementById('dob');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let country = document.getElementById('country');
    let agree = document.getElementById('agree').checked;

    let isValid = true;
    let namePattern = /^[a-zA-Z\s'-]+$/;

    let firstName = fname.value.trim();
    if (firstName === '' || !(firstName.at(0) >= 'A' && firstName.at(0)<='Z') || firstName.length < 3 || !namePattern.test(firstName)) {
      console.log(fname.value.trim());
      fname.classList.add('invalid-input');
      document.getElementById('fnameError').style.display = 'block';
      isValid = false;
    } 
    else {
      fname.classList.remove('invalid-input');
      document.getElementById('fnameError').style.display = 'none';
    }
    
    let lastName = lname.value.trim();
    if (lastName === '' || !(lastName.at(0) >= 'A' && lastName.at(0) <='Z') || lastName.length < 3 || !namePattern.test(lastName)) {
      lname.classList.add('invalid-input');
      document.getElementById('lnameError').style.display = 'block';
      isValid = false;
    } 
    else {
      lname.classList.remove('invalid-input');
      document.getElementById('lnameError').style.display = 'none';
    }

    let birth = new Date(dob.value.trim());
    console.log(birth + "this is");
    let present = new Date();
    let ageDifferenceInMilliseconds = present.getTime() - birth.getTime();
    let ageDifferenceInYears = ageDifferenceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    if (dob.value.trim() === '' || ageDifferenceInYears < 18 ) {
      dob.classList.add('invalid-input');
      document.getElementById('dobError').style.display = 'block';
      isValid = false;
    } 
    else {
      dob.classList.remove('invalid-input');
      document.getElementById('dobError').style.display = 'none';
    }
    
    let emailInput = email.value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
      email.classList.add('invalid-input');
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    } 
    else {
      email.classList.remove('invalid-input');
      document.getElementById('emailError').style.display = 'none';
    }

    let phoneInput = phone.value.trim();
    let phonePattern = /^\+\d{1,3}[6-9]\d{9}$/;
    if (!phonePattern.test(phoneInput) ) {
      phone.classList.add('invalid-input');
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
    } 
    else {
      phone.classList.remove('invalid-input');
      document.getElementById('phoneError').style.display = 'none';
    }


    if (!male && !female) {
      document.getElementById('genderError').style.display = 'block';
      isValid = false;
    } 
    else {
      document.getElementById('genderError').style.display = 'none';
    }

    if(country.value.trim() === ''){
      country.classList.add('invalid-input');
      document.getElementById('countryError').style.display = 'block';
      isValid = false;
    }
    else{
      country.classList.remove('invalid-input');
      document.getElementById('countryError').style.display = 'none';
    }

    if(!agree){
      document.getElementById('agreeError').style.display = 'block';
      isValid = false;
    }
    else{
      document.getElementById('agreeError').style.display = 'none';
    }

    if (isValid) {
      let thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
      thankYouModal.show();
      document.getElementById('basicForm').reset();
    }
  }