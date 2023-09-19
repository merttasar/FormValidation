const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");
const btnRegister = document.querySelector("#btnRegister");

function error(input, message) {
  input.className = "form-control mt-2 is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}
function success(input) {
  input.className = "form-control mt-2 is-valid";
  const div = input.nextElementSibling;
  div.innerText = "";
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLocaleLowerCase());
}

function validatePhone(phone) {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(phone);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    error(username, "Boş bırakılamaz.");
  } else if (username.value.length < 6) {
    error(username, "Username 6 harften uzun olması gerekli");
  } else {
    success(username);
  }

  if (email.value === "") {
    error(email, "Boş bırakılamaz.");
  } else if (email.value.length < 6) {
    error(email, "Email 6 hartfen uzun olması gerekli");
  } else if (!validateEmail(email.value)) {
    error(email, "Geçerli bir mail giriniz.");
  } else {
    success(email);
  }

  if (phone.value === "") {
    error(phone, "Boş bırakılamaz.");
  } else if (!validatePhone(phone.value)) {
    error(phone, "Yanlış telefon biçimi.");
  } else {
    success(phone);
  }

  if (password.value === "") {
    error(password, "Boş bırakılamaz.");
  } else if (password.value > 16) {
    error(password, "Şifre Gerekli");
  } else {
    success(password);
  }

  if (repassword.value === "") {
    error(repassword, "Boş bırakılamaz.");
  } else if (repassword.value !== password.value) {
    error(repassword, "Şifreler eşleşmiyor.");
  } else {
    success(repassword);
  }
});
