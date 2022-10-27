document.addEventListener("DOMContentLoaded", ()=> {

document.getElementById('save').addEventListener("click", AddCommand);    
})

function AddCommand(){
    var com = document.getElementById("command").value;
    var snpt = document.querySelector('#snippet').value;
    alert(com);
    let savedCommands = {
        command : com,
        snippet: snpt
    }
    alert(savedCommands);
    let savedData;
    if(localStorage.getItem('data' === null)){
        savedData = [savedCommands]
    }
    else{
        savedData = JSON.parse(localStorage.getItem('data'));
        savedData.push(savedCommands);
        localStorage.setItem('data', JSON.stringify(savedData));
    }
    location.href = "popup.html";
}