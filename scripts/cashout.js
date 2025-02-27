// cash-out
document.querySelector("#cash-out-btn").addEventListener("click", function(event){
    event.preventDefault();

    const agentNumber = document.querySelector("#cash-out-account-num").value;
    const pinNumber2 = document.querySelector("#cash-out-pin-num").value;
    // amount to add
    const amount = document.querySelector("#cash-out-amount").value;
    const convertedAmount = parseInt(amount);
    // account balance
    const accountBalance = document.querySelector("#balance");
    const oldABalance = accountBalance.innerText;
    const convertedOldBalance = parseInt(oldABalance);
    console.log(convertedAmount);
    console.log(convertedOldBalance);

    if(agentNumber.length === 11 && pinNumber2 === "1234"){
        if(convertedAmount <=  convertedOldBalance){
            const totalBalance = convertedOldBalance - convertedAmount;
            accountBalance.innerText = totalBalance;
        }
        else{
            alert("Not Enough Money");
        }
    }
    else{
        alert("Invalid Information");
    }
})

