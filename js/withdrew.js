/**
 * 1 >step :- add event handler with the withDrew Button
 * 2 >step :- get the withDrew amount from the withdrew input field
 * 2.5>step :- also make sure the convert the input into a number by useing parseFloat
 * 3 >step :- get pevious witdrew total
 * 4 >step :- total Withdrew amount
 * 4-5 >step :- 
 * 5 >step :- get the prveious Balance total
 * 6 >step :-  get the Withdrew for total Balance 
 * last >step :- clear the input value....
*/
// 1 >step :-
document.getElementById('btn-withdrew').addEventListener('click', function(){

    // 2 >step :-
    const withdrewTotalElement = document.getElementById('withdrew-field');
    // 2.5>step :-
    const newWithdrewAmountString = withdrewTotalElement.value;
    const newWithdrewAmount = parseFloat(newWithdrewAmountString);

    // STEP :- Last 
    withdrewTotalElement.value = '';
    
    // Not alweys string the alweys the Number
    if(isNaN(newWithdrewAmount)){
        alert('Please Provide a Number');
        return;
    }

    //3 >step :-
    const witdrewBalanceElemet = document.getElementById('withdrew-balance');
    const withDrewBalanceString = witdrewBalanceElemet.innerText;
    const previouswitdrewBalance = parseFloat(withDrewBalanceString);


    // 5 >step :-
    const currentBalanceElement = document.getElementById('current-balance');
    const currentBalanceString = currentBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(currentBalanceString);

    if( newWithdrewAmount > previousBalanceTotal){
        alert('Tumar Baaper Banke eto TaHa nai');
        return;
    }

      // 4 >step :-
      const currentWithdrewTotalAmount = previouswitdrewBalance + newWithdrewAmount
      // 4.5 >step :-
      witdrewBalanceElemet.innerText = currentWithdrewTotalAmount;

    // 6 >step :-
    const newBalanceTotal = previousBalanceTotal - newWithdrewAmount;
    currentBalanceElement.innerText = newBalanceTotal;

    

})