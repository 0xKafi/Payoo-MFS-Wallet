document.querySelector("#logout-btn").addEventListener("click", function(event){
    window.location.href = "./index.html";
})

document.querySelector("#add-money-btn").addEventListener("click", function(event){
    event.preventDefault();

    const accountNumber = document.querySelector("#account-num").value;
    const pinNumber = document.querySelector("#pin-num").value;
    // amount to add
    const amount = document.querySelector("#amount").value;
    const convertedAmount = parseInt(amount);
    // account balance
    const accountBalance = document.querySelector("#balance");
    const oldABalance = accountBalance.innerText;
    const convertedOldBalance = parseInt(oldABalance);

    if(accountNumber.length === 11 && pinNumber === "1234"){
        if(convertedAmount >= 10){
            const totalBalance = convertedAmount + convertedOldBalance;
            accountBalance.innerText = totalBalance;
        }
    }
    else{
        alert("Invalid Information");
    }
});

