const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle_btn");
const Body = document.querySelector("body");

toggle.addEventListener("click", (e) => {
    toggleBtn.classList.toggle("night-mode")
    if (toggleBtn.classList.contains("night-mode")){
        Body.classList.add("night");
    }else{
        Body.classList.remove("night"); 
    }
});