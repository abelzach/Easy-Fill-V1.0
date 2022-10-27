document.addEventListener("DOMContentLoaded", ()=> {

document.getElementById('save').addEventListener("click", AddCommand);
document.getElementById('get').addEventListener("click", AddCommand);   
})

function AddCommand(){
    var com = document.getElementById("command").value;
    var snpt = document.querySelector('#snippet').value;
    let savedCommands = {
        command : com,
        snippet: snpt
    }
    chrome.storage.local.set({'Command': savedCommands}, function() {
        alert('Success');
      });
      
    location.href = "popup.html";
}

