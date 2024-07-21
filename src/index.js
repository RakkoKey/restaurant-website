//console.log("Hi");
import {addElements} from "./menu";
import {addDescription, topicHeader} from "./about";
import './style.css';

var content = document.getElementById("content");
const buttons = document.getElementsByTagName("button");
console.log(buttons);
function resetContent(){
    
    while(content.firstChild){
        console.log("in while loop");
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
            case("Home"):
                addHomePage();
                break;
        }
        
        console.log("clicked");
        //change content
    }); 
}
function addHomePage(){
    var header = document.createElement('div');
    header.setAttribute("id", "header");
    content.appendChild(header);

    var menuText = document.createElement('h1');
    menuText.innerHTML = "Home";
    menuText.setAttribute("id", "herotext");
    header.appendChild(menuText);

    var welcomeSign = document.createElement('h2');
    welcomeSign.innerHTML = "Welcome";
    welcomeSign.classList.add("topics")

    var box = document.createElement('div');
    box.setAttribute('id', 'menu');
    box.appendChild(welcomeSign);

    var welcomedesc = document.createElement('p');
    welcomedesc.innerHTML = "Hello, welcome to Generic Restaurant. As the name suggests, we offer things that a lot of normal restaurants offer, but without the fancy marketing.";
    box.appendChild(welcomedesc);


    var locationSign = new topicHeader();
    locationSign.element.innerHTML = "Locations"
    box.appendChild(locationSign.element);

    var addresses = document.createElement('p');
    addresses.innerHTML = "3686 Morton Light, North Domenic, ID 38209";

    box.appendChild(addresses);


    content.appendChild(box);

    


}

function addFooter(){
    var footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');

    var attribution = document.createElement('p')
    attribution.innerHTML = "Created by: RakkoKey";
    footer.appendChild(attribution);

    
    content.appendChild(footer);
}
addHomePage();
addFooter();