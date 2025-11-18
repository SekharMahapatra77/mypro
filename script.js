const btn = document.querySelectorAll("button")
// const screen = document.getElementById("result")
const screen = document.querySelector(".screen")

btn.forEach((btns)=>{
    btns.addEventListener("click", function(){
        if(btns.classList.contains("equal")){
            screen.value = eval(screen.value)
        }else if(btns.classList.contains("ac")){
            screen.value = ""
        }else
            screen.value += btns.textContent
    })
})