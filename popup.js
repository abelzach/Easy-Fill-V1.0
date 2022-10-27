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
    // chrome.storage.local.set({'Command':savedCommands}, function() {
    //     alert('Success');
    //   });
      
    chrome.storage.local.get({userKeyIds: []}, function (result) {
        
        // userKeyIds.push(result.Command);
        //alert(JSON.stringify(userKeyIds));
        var userKeyIds = result.userKeyIds;
        userKeyIds.push(savedCommands);
        alert(userKeyIds);
        chrome.storage.local.set({userKeyIds : userKeyIds}, function() {
            alert('Success');
        });
    });
    location.href = "popup.html";
}

function GetCommand(){
    // chrome.storage.local.get({userKeyIds: []}, function(result) {
    //     alert(JSON.stringify(result.userKeyIds));
    // });
    chrome.storage.local.get({userKeyIds: []}, function(result) {
        for(var i=0;i<result.userKeyIds.length;i++){
            console.log(result.userKeyIds[i].command);
            console.log(result.userKeyIds[i].snippet);
        }
    });
}