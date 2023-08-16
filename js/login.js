document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("email");
  const emailValue = emailField.value;

  const passField = document.getElementById("password");
  const passValue = passField.value;

  // Email and pass validation
  if (emailValue === "sakib@nadiatul.com" && passValue === "sakibsbank") {
    location.href = "bank.html";
  } else {
    alert("Why invalid entries bro???");
  }
});
