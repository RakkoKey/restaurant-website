import background from './images/food.jpeg'
const contentDiv = document.getElementById("content");
function addElements(){
    console.log("menu command run");
    
    var header = document.createElement('div');
    header.setAttribute("id", "header");
    
    var menuText = document.createElement('h1');
    menuText.innerHTML = "Menu";
    menuText.setAttribute("id", "herotext");
    header.appendChild(menuText);
    contentDiv.appendChild(header);
    //create header for menu

    //create div for menu items


}
export{contentDiv, addElements};