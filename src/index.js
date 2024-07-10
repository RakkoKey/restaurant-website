console.log("Hi");
var content = document.getElementById("content");
function resetContent(){
    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}