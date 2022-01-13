var a=document.querySelectorAll(".sum div");
a.forEach((value)=>{  
    value.addEventListener("click",()=>{
        a.forEach((values)=>{
            values.classList.remove("red")
        })
        value.classList.add("red")
    })
})