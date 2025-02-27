document.getElementById("bonus-btn").addEventListener("click", function(event){
    event.preventDefault();
    const cupon = document.getElementById("bonus-coupon").value;

    if(cupon === "5460"){
        alert("You received $10 Bonus");
        const accountBalance = document.querySelector("#balance");
        const oldABalance = accountBalance.innerText;
        const convertedOldBalance = parseInt(oldABalance);
        const totalBalance = 10 + convertedOldBalance;
        accountBalance.innerText = totalBalance;
    }
    else{
        alert("Invalid Cupon");
    }
});
