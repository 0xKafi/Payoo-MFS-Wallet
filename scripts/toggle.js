// add-money
document.querySelector("#add-money").addEventListener("click", function(){
    document.querySelector("#add-money-form").style.display = "block";
    document.querySelector("#cash-out-form").style.display = "none";
})

// cash-out
document.querySelector("#cash-out").addEventListener("click", function(){
    document.querySelector("#cash-out-form").style.display = "block";
    document.querySelector("#add-money-form").style.display = "none";
})