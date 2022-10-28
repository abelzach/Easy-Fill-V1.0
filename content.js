window.onload = () => {
document.body.addEventListener("click", getFocused);
Replace();
}
var element1;

function getFocused () {
    const element = document.activeElement.tagName;
    if(element === "INPUT" || element === "DIV"){
        element1 = document.activeElement.id;
    }
    //Replace();
}

function Replace(){
    let comm = [];
    let snipp = [];
    console.log("Inside Replace");
    chrome.storage.local.get({userKeyIds: []}, function(result) {
        for(let i=0;i<result.userKeyIds.length;i++){
            console.log(result.userKeyIds[i].command+ "  ");
            regexp = new RegExp(String(result.userKeyIds[i].command), "g");
            var v = document.getElementById(element1).textContent;
            v = v.replace(regexp, String(result.userKeyIds[i].snippet));
            document.getElementById(element1).innerHTML = v;
        }
    });

    
}