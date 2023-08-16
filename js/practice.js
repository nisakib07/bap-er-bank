document.getElementById("double").addEventListener("click", function () {
  const numberField = document.getElementById("number");
  const numberValue = numberField.value;
  const numberValueFloat = parseFloat(numberValue);

  numberField.value = "";
  if (isNaN(numberValueFloat)) {
    alert("Enter a number");
    return;
  }
  const result = document.getElementById("result");
  result.innerText = numberValueFloat * 2;
});

document.getElementById("triple").addEventListener("click", function () {
  const numberField = document.getElementById("number");
  const numberValue = numberField.value;
  const numberValueFloat = parseFloat(numberValue);

  numberField.value = "";
  if (isNaN(numberValueFloat)) {
    alert("Enter a number");
    return;
  }
  const result = document.getElementById("result");
  result.innerText = numberValueFloat * 3;
});

document.getElementById("reset").addEventListener("click", function () {
  const result = document.getElementById("result");
  result.innerText = "00";
});
