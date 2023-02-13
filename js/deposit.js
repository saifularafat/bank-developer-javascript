    // step:- 1 add event listener to the deposit button 
    document.getElementById('btn-deposit').addEventListener('click', function(){
        
    // step :- 2 get the deposite amount from the deposite input fleid 
    // for input field use. Value to the value inside the input field 
    const depositFieldAmount = document.getElementById('deposit-field');
    const newDepositAmountString = depositFieldAmount.value; 
    const newDepositAmount = parseFloat(newDepositAmountString)
    // step:- last 
    depositFieldAmount.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please Provide a Number');
        return;
    }

    // step:- 3 get the current deposit balance
    // for no-input (element other than input textarea) use innerText to get the text 
    const depositShoweTotal = document.getElementById('deposit-balance');
    const previoseDepositAmountString = depositShoweTotal.innerText;
    const previoseDepositAmount = parseFloat(previoseDepositAmountString);

    // step :- 4 add number of the total Deposit newDepositAmount + previoseDepositAmount 
    const currentDepositeAmound = previoseDepositAmount + newDepositAmount ;
    // step : 4.a total maner shate (depositShoweTotal) jug fulke add kore dite hobe (currentDepositeAmound) ekhane jug ful ke total er shete guj kora hoice.....
    depositShoweTotal.innerText = currentDepositeAmound;

    // step:- 5 get Current Balance setup 
    const currentBalanceElement = document.getElementById('current-balance')
    const currentBalanceString = currentBalanceElement.innerText;
    const previousBalanceAmount = parseFloat(currentBalanceString);

    // Current Balance addeds
    const currentBalanceTotal = previousBalanceAmount + newDepositAmount;
    currentBalanceElement.innerText = currentBalanceTotal;


    
})