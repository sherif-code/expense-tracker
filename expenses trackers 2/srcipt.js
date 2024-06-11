document.addEventListener("DOMContentLoaded", function () {
  const addExpenseButton = document.getElementById("add-expense");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseDateInput = document.getElementById("expense-date");
  const expensesList = document.getElementById("expenses");
  const totalExpenseElement = document.getElementById("total-expense");

  let totalExpense = 0;

  addExpenseButton.addEventListener("click", function (event) {
    event.preventDefault();

    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);
    const expenseDate = expenseDateInput.value;

    if (expenseName && !isNaN(expenseAmount) && expenseDate) {
      // new list item for the expense
      const listItem = document.createElement("li");
      listItem.textContent = `${expenseDate} - ${expenseName}: $${expenseAmount.toFixed(
        2
      )}`;

      expensesList.appendChild(listItem);

      totalExpense += expenseAmount;
      totalExpenseElement.textContent = `$${totalExpense.toFixed(2)}`;

      expenseNameInput.value = "";
      expenseAmountInput.value = "";
      expenseDateInput.value = "";
    } else {
      alert("Please enter a valid expense name, amount, and date.");
    }
  });
});
