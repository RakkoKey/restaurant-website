//console.log("Hi");
import {addElements} from "./menu";
import './style.css';

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
        if(buttons[i].getAttribute('id') == "Menu"){
            addElements();
        }
        
        console.log("clicked");
        //change content
    });
}