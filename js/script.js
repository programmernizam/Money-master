// Input Filed
function getInput(id){
    const expensesInput = document.getElementById(id);
    const expensesCost = parseFloat(expensesInput.value);
    if(isNaN(expensesCost) || expensesCost < 0){
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
document.getElementById('saving-btn').addEventListener('click', function(){
    const totalIncome = getInput('total-income');
    const totalBalance = document.getElementById('total-balance');
    const savingNumber = getInput('saving-number');
    const savingAmount = totalIncome * (savingNumber / 100);
    if(savingAmount > totalIncome || savingAmount < 0){
        return alert("Saving amount bigger then Income")
    }
    document.getElementById('saving-amount').innerText = savingAmount;
    
})