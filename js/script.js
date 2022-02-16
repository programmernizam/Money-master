// Input Filed
function getInput(id){
    const expensesInput = document.getElementById(id);
    const expensesCost = parseFloat(expensesInput.value);
    if(isNaN(expensesCost) || expensesCost < 0){
        expensesInput.value = '';
        return alert("Please enter valid number of money");
    }
    expensesInput.value = '';
    return expensesCost;
}
function getExpenses(){
    const foodExpenses = getInput('food-expenses');
    const rentExpenses = getInput('rent-expenses');
    const clothesExpenses = getInput('clothes-expenses');
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    return totalExpenses;
}
document.getElementById('calculate-btn').addEventListener('click', function(){
// Total Expenses
   const totalExpenses = getExpenses()
    document.getElementById('total-expenses').innerText = totalExpenses;
    // Total Balance
    const totalIncome = getInput('total-income');
    if(totalExpenses > totalIncome){
        return alert("You don't have enough money for your expenses. Please enter low money for expenses!!")
    }
    const totalBalance = totalIncome - totalExpenses;
    document.getElementById('total-balance').innerText = totalBalance;
})
// Saving
document.getElementById('saving-btn').addEventListener('click', function(){
    const totalBalance = document.getElementById('total-balance').innerText;
    const savingNumber = getInput('saving-number');
    const savingAmount = totalBalance * (savingNumber / 100);
    if(savingAmount > totalBalance || savingAmount < 0){
        return alert("Saving amount bigger then Income")
    }
    const remainingBalance = totalBalance - savingAmount;
    document.getElementById('saving-amount').innerText = savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
    
})