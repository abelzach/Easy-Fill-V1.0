document.addEventListener("DOMContentLoaded", ()=> {

document.getElementById('save').addEventListener("click", AddCommand);
document.getElementById('get').addEventListener("click", GetCommand);   
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

function GetCommand(){
    chrome.storage.local.get(['Command'], function(result) {
        alert('Value currently is ' + JSON.stringify(result.Command));
    });
}