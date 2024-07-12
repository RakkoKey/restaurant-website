//console.log("Hi");
var content = document.getElementById("content");
const buttons = document.getElementsByName("button");
function resetContent(){
    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        resetContent()
        //change content
    });
}