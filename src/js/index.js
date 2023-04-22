const btn = document.querySelector(".btn");
btn.disabled = true;
const tasks = document.querySelector(".tasks");
const typeList = document.querySelector(".type-list");

typeList.addEventListener("click", (event) => {
    event.target.style.color = "#ee6002";
})

typeList.addEventListener("dblclick", (event) => {
    event.target.style.color = "#b896a7";
})

document.getElementById("input").addEventListener("input", () => {
    if(input.value !== " "){
        btn.disabled = false;
        document.querySelector("span").classList.remove("note");
    }
})

btn.addEventListener("click", () => {
    if(input.value !== " "){ 
        const input = document.getElementsByName("input-task");
        const newTask = input[0].value;
        
        tasks.innerHTML += `<li>${newTask} </li>`;
        input[0].value = " ";

        }  else{
        document.querySelector("span").classList.add("note");  
    }   
})

tasks.addEventListener("dblclick", (event) => {  
    event.target.style.textDecoration = "line-through";
    event.target.style.fontWeight = "400";
    event.target.style.color = "#b896a7";
})

