

//step-01: add event handler with the withdraw buttton

document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-02: get the withdraw amount from the withdraw input field

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please Provide a Valid Number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baaper Eto Taka nai');
        return;
    }


    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-06: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;


    

})