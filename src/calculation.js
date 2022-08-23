// ===============playerExpenses Calculations==================
const calculateBtn = document.getElementById("calculateBtn");
const playerExpenses = document.getElementById("playerExpenses");
calculateBtn.addEventListener("click", () => {
  const perplayerInput = document.getElementById("perplayerInput").value;
  const perplayerInputValue = parseInt(perplayerInput);
  let ul = document.getElementById("selectedItems");
  const ulValue = ul.childNodes.length - 1;
  const calculation = perplayerInputValue * ulValue;
  playerExpenses.innerText = calculation;
});

// ======================TOTAL CALCULATION =================
const calculateTotalBtn = document.getElementById("calculateTotalBtn");
const playerTotalExpenses = document.getElementById("playerTotalExpenses");
calculateTotalBtn.addEventListener("click", () => {
  const managerInput = document.getElementById("managerInput").value;
  const managerInputValue = parseInt(managerInput);
  console.log(managerInputValue);
  const coachInput = document.getElementById("coachInput").value;
  const coachInputValue = parseInt(coachInput);
  console.log(coachInputValue);
  const perplayerExpenses = playerExpenses.innerText;
  const perplayerExpensesValue = parseInt(perplayerExpenses);
  const calculation =
    perplayerExpensesValue + managerInputValue + coachInputValue;

  playerTotalExpenses.innerText = calculation;
});
