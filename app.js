const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle_btn");
const annualAmount = document.querySelectorAll(".a-amount");
const monthAmount = document.querySelectorAll(".m-amount");


toggle.addEventListener("click", (e) => {
    toggleBtn.classList.toggle("active");
    for (i = 0; i < annualAmount.length; i++){
        annualAmount[i].classList.toggle("active");
        monthAmount[i].classList.toggle("active");
    }
    
});

document.addEventListener("keydown", (e) =>{
    e.preventDefault();
    var name = e.code;

    if (name === "Tab"){
        toggleBtn.classList.toggle("active");
        for (i = 0; i < annualAmount.length; i++){
            annualAmount[i].classList.toggle("active");
            monthAmount[i].classList.toggle("active");
        }
    }

    if (name === "Space"){
        toggleBtn.classList.toggle("active");
        for (i = 0; i < annualAmount.length; i++){
            annualAmount[i].classList.toggle("active");
            monthAmount[i].classList.toggle("active");
        }
    }
});