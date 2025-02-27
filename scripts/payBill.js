// cash-out
document.getElementById("pay-bill-btn").addEventListener("click", function(event){
    event.preventDefault();

    const billerNumber = document.getElementById("biller-account-num").value;
    const pinNumber = document.getElementById("pin-num").value;

    const amount = document.getElementById("pay-amount").value;
    const convertedAmount = parseInt(amount);
    // account balance
    const accountBalance = document.getElementById("balance");
    const oldABalance = accountBalance.innerText;
    const convertedOldBalance = parseInt(oldABalance);

    if(billerNumber.length === 11 && pinNumber === "1234"){
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