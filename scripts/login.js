document.querySelector("#login-btn")
    .addEventListener("click", function(event){
        event.preventDefault();
        const accountNumber = document.querySelector("#account-num").value;
        const pinNumber = document.querySelector("#pin-num").value;

        if(accountNumber.length === 11){
            if(pinNumber === "1234"){
                window.location.href = "./main.html"
            }
            else{
                alert("Worng Information");
            }
        }
        else{
            alert("Worng Information");
        }
    })