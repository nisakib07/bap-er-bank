document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-amount");
  const depositAmount = depositField.value;
  const depositAmountNum = parseInt(depositAmount);

  depositField.value = "";

  if (isNaN(depositAmountNum)) {
    alert("Please enter a valid deposit amount");
    return;
  }

  const currentDepositTotal = document.getElementById("total-deposit");
  const currentDepositTotalNum = parseInt(currentDepositTotal.innerText);

  const currentBalance = document.getElementById("total-balance");
  const currentBalanceNum = parseInt(currentBalance.innerText);

  const finalDepositTotal = depositAmountNum + currentDepositTotalNum;
  currentDepositTotal.innerText = finalDepositTotal;

  const finalBalance = depositAmountNum + currentBalanceNum;
  currentBalance.innerText = finalBalance;
});
