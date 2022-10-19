

//? SELECTORS

const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn")
const deleteBtn = document.querySelector("#delete-btn")
const langList = document.getElementById("lang-list")



const newUl =document.createElement("ul")
langList.appendChild(newUl);


addBtn.addEventListener("click",() => {
if (!langInput.value) {
    alert("Please enter a langauge");
    
}else{
    newUl.innerHTML +=` <li>${langInput.value}</li>`;
    langInput.value ="";
}
})

//onload işlemi

window.addEventListener('load',()=>{
    langInput.focus();
})
//!----------------------------------------------
deleteBtn.addEventListener('click',() => {
    newUl.childElementCount >0
?newUl.removeChild(newUl.lastChild)
:alert("There is no item to delete")

})


//! DEL KEY
langInput.addEventListener('keydown',(event =>{

    if (event.code ==='Delete') {
        deleteBtn.click()
        
    }
}))



//! ENTER KEY

langInput.addEventListener('keydown',(event) =>{
    // console.log(event);
    // console.log(event.target);
    // console.log(event.keyCode);
    // console.log(event.Code);
if (event.keyCode ===13) {
    addBtn.click()

}
})