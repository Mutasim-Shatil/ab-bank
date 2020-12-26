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
  const depositAmount = document.getElementById("deposit-amount").value;
  const depositNumber = parseFloat(depositAmount);
  updateSpanText("current-deposit", depositNumber);
  //   const currentDeposit = document.getElementById("current-deposit").innerText;
  //   const currentDepositNumber = parseFloat(currentDeposit);
  //   const totalDeposit = depositNumber + currentDepositNumber;
  //   document.getElementById("current-deposit").innerText = totalDeposit;
  //balance
  updateSpanText("total-balance", depositNumber);

  document.getElementById("deposit-amount").value = "";
});
function updateSpanText(id, depositNumber) {
  const currentBalance = document.getElementById(id).innerText;
  const totalBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + totalBalanceNumber;
  document.getElementById(id).innerText = totalBalance;
}
