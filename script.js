const expenseName = document.getElementById("expenseName");
const expenseCategory = document.getElementById("expenseCategory");
const expenseAmount = document.getElementById("expenseAmount");
const addExpense = document.getElementById("addExpense");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

let total = 0;

addExpense.addEventListener("click", function(){

    const name = expenseName.value.trim();
    const category = expenseCategory.value;
    const amount = Number(expenseAmount.value);

    if(name === "" || amount <= 0){
        alert("Please enter valid expense details");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <strong>${name}</strong><br>
        Category: ${category}<br>
        Amount: ₹${amount}
    `;

    expenseList.appendChild(li);

    total += amount;
    totalAmount.textContent = total;

    expenseName.value = "";
    expenseAmount.value = "";
});