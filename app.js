const aadhaarNumber = document.getElementById("Aadhaar");
const Name = document.getElementById("Name");
const Email = document.getElementById("Email");

const validateAadhaar = () => {
  var regexp = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
  var result = aadhaarNumber.value;

  if (regexp.test(result)) {
    // alert("Valid Aadhaar Number");
  } else {
    alert("Invalid Aadhaar Number");
    aadhaarNumber.value=""
  }
};

aadhaarNumber.addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});

const validateName = () => {
  var regexp = /^[a-zA-Z ]{2,30}$/;
  var result = Name.value;

  if (regexp.test(result)) {
    // alert("Valid Name");
  } else {
    alert("Invalid Name");
    Name.value=""
  }
};
const validateEmail = () => {
  var regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var result = Email.value;

  if (regexp.test(result)) {
    // alert("Valid Name");
  } else {
    alert("Invalid Email Address");
    Email.value=""
  }
};
