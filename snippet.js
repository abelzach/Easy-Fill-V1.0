document.addEventListener("DOMContentLoaded", ()=> {

    document.getElementById('get').addEventListener("click", GetCommand);   
    })
    

    
    function GetCommand(){
        chrome.storage.local.get(['Command'], function(result) {
            alert('Value currently is ' + JSON.stringify(result.Command));
        });


        useEffect(() => {
            const createContent = alterText(textArr, mostUsedWord, firstWord, lastWord)
            console.log("content", createContent)
            const textDataDiv = document.getElementById("text-data")
            textDataDiv.innerHTML = createContent
            setTextAltered(true)
        }, [mostUsedWord])

        
    }