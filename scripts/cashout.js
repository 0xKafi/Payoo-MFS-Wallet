// cash-out
document.querySelector("#cash-out-btn").addEventListener("click", function(event){
    event.preventDefault();

    const agentNumber = document.querySelector("#cash-out-account-num").value;
    const pinNumber = document.querySelector("#pin-num").value;

    const amount = document.querySelector("#cash-out-amount").value;
    const convertedAmount = parseInt(amount);
    // account balance
    const accountBalance = document.querySelector("#balance");
    const oldABalance = accountBalance.innerText;
    const convertedOldBalance = parseInt(oldABalance);

    if(agentNumber.length === 11 && pinNumber === "1234"){
        if(convertedAmount <=  convertedOldBalance && 0 < convertedAmount){
            const totalBalance = convertedOldBalance - convertedAmount;
            accountBalance.innerText = totalBalance;
        }
        else if(convertedAmount > convertedOldBalance){
            alert("Not Enough Money");
        }
        else{
            alert("Enter valid amount");
        }
    }
    else{
        alert("Invalid Information");
    }
})