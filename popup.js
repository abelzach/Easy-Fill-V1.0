document.addEventListener("DOMContentLoaded", ()=> {
    function AddCommand(){
        var command = document.getElementById("command").value;
        var snippet = document.getElementById("snippet").value;
        submitOK = true;
        if(snippet.value < 0)
        {
            alert("Snippet cannot be empty");
            sumbitOK = False;
        }
        if(command.value < 0)
        {
            alert("Command cannot be empty");
            submitOK = false;
        }

        if(submitOK == TRUE){
            chrome.storage.local.set({command: snippet}, () => {
                if (chrome.runtime.lastError)
                    console.log('Error setting');
    
                console.log('Stored snippet: ' + snippet.name);
            });
        }
        
        if(submitOK == false){
            alert("Retry");
        }
    }
})