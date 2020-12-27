// login btn
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});
//deposit btn
const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click", function () {
//   const depositAmount = document.getElementById("deposit-amount").value;
//   const depositNumber = parseFloat(depositAmount);
// add function
    const depositNum = getInputNum("deposit-amount")
  updateSpanText("current-deposit", depositNum);
  //   const currentDeposit = document.getElementById("current-deposit").innerText;
  //   const currentDepositNumber = parseFloat(currentDeposit);
  //   const totalDeposit = depositNumber + currentDepositNumber;
  //   document.getElementById("current-deposit").innerText = totalDeposit;
  //balance
  updateSpanText("total-balance", depositNum);

  document.getElementById("deposit-amount").value = "";
});
function updateSpanText(id, depositNumber) {
  const Balance = document.getElementById(id).innerText;
  const totalBalanceNumber = parseFloat(Balance);
  const totalBalance = depositNumber + totalBalanceNumber;
  document.getElementById(id).innerText = totalBalance;
}

//withdraw section
const withdraw = document.getElementById("withdraw");
withdraw.addEventListener("click", function () {
  const withdrawAmount = getInputNum("withdraw-amount")
    updateSpanText("total-withdraw", withdrawAmount)
//   const totalWithdraw = document.getElementById("total-withdraw").innerText;
//   const totalWithdrawNum = parseFloat(totalWithdraw);
//   const finalWithdraw = withdrawAmount + totalWithdrawNum;
//   document.getElementById("total-withdraw").innerText = finalWithdraw;

  const totalBalance = document.getElementById("total-balance").innerText;
  const totalBalanceNum = parseFloat(totalBalance);
  const totalBalanceAmount = totalBalanceNum - withdrawAmount;
  document.getElementById("total-balance").innerText = totalBalanceAmount;

  document.getElementById("withdraw-amount").value = "";
});
function getInputNum(id){
    const Amount = document.getElementById(id).value;
    const AmountNum = parseFloat(Amount);
    return AmountNum;
}
