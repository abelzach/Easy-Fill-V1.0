window.onload = () => {
document.body.addEventListener("click", getFocused);
}

function getFocused () {
    const element = document.activeElement.tagName;
    if(element === "INPUT" || element === "DIV"){
        const element1 = document.activeElement.id;
        alert(element1);
    }
}