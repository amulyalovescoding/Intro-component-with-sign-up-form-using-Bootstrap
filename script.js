// Error msg
var errorFName = "First Name cannot be empty";
var errorLName = "Last Name cannot be empty";
var errorEmail = "Looks like this is not an email";
var errorPassword = "Password cannot be empty";

document.querySelectorAll('.form-control').forEach((item) => {
  item.addEventListener("change", ()=> {
    if (item.value != "") {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

const form = document.querySelector("form");

function validateForm() {
  const fName = document.getElementById("fName");
  const lName = document.getElementById("lName");
  const emailId = document.getElementById("email");
  const pass = document.getElementById("inputPassword2");

  var firstName = fName.value;
  var lastName = lName.value;
  var email = emailId.value;
  var password = pass.value;

  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);

  if (firstName === "") {
    var errorText = document.getElementById("error-text-fName");
    errorText.innerHTML = errorFName;
    errorText.classList.add("active");
    document.getElementById("fName").classList.add("icon-active");
    document.getElementById("fName").classList.add("error");
  }
  if (lastName === "") {
    var errorText = document.getElementById("error-text-lName");
    errorText.innerHTML = errorLName;
    errorText.classList.add("active");
    document.getElementById("lName").classList.add("icon-active");
    document.getElementById("lName").classList.add("error");
  }
  if (email === "" || !email.match(emailformat)) {
    var errorText = document.getElementById("error-text-email");
    errorText.innerHTML = errorEmail;
    errorText.classList.add("active");
    document.getElementById("email").classList.add("icon-active");
    document.getElementById("email").classList.add("error");
  }
  if (password === "") {
    var errorText = document.getElementById("error-text-password");
    errorText.innerHTML = errorPassword;
    errorText.classList.add("active");
    document.getElementById("inputPassword2").classList.add("icon-active");
    document.getElementById("inputPassword2").classList.add("error");
  }

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    !email.match(mailformat) ||
    password === ""
  ) {
    return false;
  }

  return true;
}

const submitBtn = document.querySelector(".trial-button");
submitBtn.addEventListener("click", (obj) => {
  obj.preventDefault();
  var result = validateForm();
  if (result) {
    form.submit();
  }
});
submitBtn.addEventListener("keydown", (obj) => {
  obj.preventDefault();
  if (obj.code === "Enter") {
    var result = validateForm();
    if (result) {
      form.submit();
    }
  }
});
