//console.log("Hi");
import {addElements} from "./menu";
var content = document.getElementById("content");
const buttons = document.getElementsByTagName("button");
console.log(buttons);
function resetContent(){
    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        resetContent();
        addElements();
        console.log("clicked");
        //change content
    });
}