window.onload = () => {
document.body.addEventListener("click", getFocused);
}
var element1;

function getFocused () {
    const element = document.activeElement.tagName;
    if(element === "INPUT" || element === "DIV"){
        element1 = document.activeElement.id;
    }
    Replace();
}

function Replace(){
    let comm = [];
    let snipp = [];
    chrome.storage.local.get(['Command'], function (result) {
        for (let i = 0; i < size.length; i++){
            
        }
    });

    regexp = new RegExp("/add", "g");
    var v = document.getElementById(element1).textContent;
    v = v.replace(regexp, "node_address");
    document.getElementById(element1).textContent = v;
}