const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle_btn");
const annualAmount = document.querySelector(".a-amount");
const monthAmount = document.querySelector(".m-amount");
const pannualAmount = document.querySelector(".p-a-amount");
const pmonthAmount = document.querySelector(".p-m-amount");
const mannualAmount = document.querySelector(".m-a-amount");
const mmonthAmount = document.querySelector(".m-m-amount");

toggle.addEventListener("click", (e) => {
    toggleBtn.classList.toggle("active");
    annualAmount.classList.toggle("active");
    monthAmount.classList.toggle("active");
    pannualAmount.classList.toggle("active");
    pmonthAmount.classList.toggle("active");
    mannualAmount.classList.toggle("active");
    mmonthAmount.classList.toggle("active");
   

});