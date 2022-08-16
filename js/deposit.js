//step-01: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-02: get the deposit amount from deposit input field
    //for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //step-03: get the current deposit total amount
    // for non-input(element other than input, textarea) use innerText to get the value
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    //step-04: add numbers to set the total
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;


    //step-05: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-06: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-07: clear the deposit field
    depositField.value = '';

})