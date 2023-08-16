document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-amount");
  const withdrawAmountString = withdrawField.value;
  const withdrawAmountNum = parseInt(withdrawAmountString);

  withdrawField.value = "";

  if (isNaN(withdrawAmountNum)) {
    alert("Please enter a withdraw amount");
    return;
  }
  const currentTotalWithdraw = document.getElementById("total-withdraw");
  const currentTotalWithdrawNum = parseInt(currentTotalWithdraw.innerText);

  const balanceBeforeWithdraw = document.getElementById("total-balance");
  const balanceBeforeWithdrawNum = parseInt(balanceBeforeWithdraw.innerText);

  if (withdrawAmountNum > balanceBeforeWithdrawNum) {
    alert("Who the hell will give you this much?");

    return;
  }
  const finalTotalWithdraw = withdrawAmountNum + currentTotalWithdrawNum;
  currentTotalWithdraw.innerText = finalTotalWithdraw;

  const balanceAfterWithdraw = balanceBeforeWithdrawNum - withdrawAmountNum;
  balanceBeforeWithdraw.innerText = balanceAfterWithdraw;
});
