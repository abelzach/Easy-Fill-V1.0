document.addEventListener("DOMContentLoaded", ()=> {
    const commandsContainer = document.querySelector('#commandsContainer')
    document.getElementById('get').addEventListener("click", GetCommand);   
    chrome.storage.local.get({userKeyIds: []}, function(result) {
        for(var i=0;i<result.userKeyIds.length;i++){
            console.log(result.userKeyIds[i].command);
            console.log(result.userKeyIds[i].snippet);
            const cardSectionDiv = document.createElement('div');
            cardSectionDiv.classList.add("content");
            const commandHead = document.createElement('p');
            commandHead.classList.add("commandHead");
            commandHead.innerHTML = result.userKeyIds[i].command;
            const snippetContent = document.createElement('p');
            snippetContent.classList.add("snippetContent");
            snippetContent.innerHTML = result.userKeyIds[i].snippet;
            const snippetDiv = document.createElement('div');
            snippetDiv.classList.add('snippetDiv');
            cardSectionDiv.appendChild(commandHead)
            snippetDiv.appendChild(snippetContent);
            commandsContainer.appendChild(cardSectionDiv);
            commandsContainer.appendChild(snippetDiv);
        }
    });

})
    

    
    function GetCommand(){
        chrome.storage.local.get(['Command'], function(result) {
            alert('Value currently is ' + JSON.stringify(result.Command));
        });   
    }
