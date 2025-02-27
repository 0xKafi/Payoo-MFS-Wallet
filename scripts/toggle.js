// add-money
const addMoney = document.getElementById("add-money");
const cashOut = document.getElementById("cash-out");
const transferMoney = document.getElementById("transfer");
const getBonus = document.getElementById("bonus");
const payBill = document.getElementById("pay-bill");
const transaction = document.getElementById("transaction");

addMoney.addEventListener("click", function(){
    document.getElementById("add-money-form").style.display = "block";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("transfer-form").style.display = "none";
    document.getElementById("bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";

    buttonColor(0);
})

// cash-out
cashOut.addEventListener("click", function(){
    document.getElementById("cash-out-form").style.display = "block";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("transfer-form").style.display = "none";
    document.getElementById("bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";

    buttonColor(1);
})
// transfer money
transferMoney.addEventListener("click", function(){
    document.getElementById("transfer-form").style.display = "block";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("bonus-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";

    buttonColor(2);
})
payBill.addEventListener("click", function(){
    document.getElementById("pay-bill-form").style.display = "block";
    document.getElementById("transfer-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("bonus-form").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";

    buttonColor(3);
})

// get bonus
getBonus.addEventListener("click", function(){
    document.getElementById("bonus-form").style.display = "block";
    document.getElementById("transfer-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";

    buttonColor(4);
})
transaction.addEventListener("click", function(){
    document.getElementById("transaction-section").style.display = "block";
    document.getElementById("bonus-form").style.display = "none";
    document.getElementById("transfer-form").style.display = "none";
    document.getElementById("cash-out-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("pay-bill-form").style.display = "none";

    buttonColor(5);
})


function buttonColor(index){
    const boxes = document.querySelectorAll(".box");
    const btnText = document.querySelectorAll(".btn-text");

    for(let i = 0; i<boxes.length; i++){
        if(i === index){
            boxes[i].style.backgroundColor = "rgba(8, 116, 242, 0.05)";
            boxes[i].style.borderColor = "rgb(8, 116, 242)";
            btnText[i].style.fontWeight = "bold";
            btnText[i].style.color = "rgb(8, 116, 242)";
        }
        else{
            boxes[i].style.backgroundColor = "white";
            boxes[i].style.borderColor = "rgba(8, 8, 8, 0.1)";
            btnText[i].style.fontWeight = "normal";
            btnText[i].style.color = "black";
        }
    }
}
