const inputbox=document.getElementById("input-box");
const listConatiner=document.getElementById("list-container");
function AddTask(){
    if(inputbox.value===""){
        alert("Please Enter Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listConatiner.appendChild(li);  
        let span=document.createElement("span");
        span.innerHTML="&#10006;";
        li.appendChild(span);

 
   }
    inputbox.value="";
    saveData();
}

listConatiner.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentNode.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("listContainer",listConatiner.innerHTML);
}

function showTask(){
    listConatiner.innerHTML=localStorage.getItem("listContainer");
}
showTask();





