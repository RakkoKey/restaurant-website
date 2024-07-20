//console.log("Hi");
import {addElements} from "./menu";
import {addDescription} from "./about";
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
        switch(buttons[i].getAttribute('id')){
            case("Menu"):
                addElements();
                break;
            case("About"):
                addDescription();
                break;
        }
        
        console.log("clicked");
        //change content
    }); 
}