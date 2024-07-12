const contentDiv = document.getElementById("content");
function addElements(){
    console.log("menu command run");
    
    var header = document.createElement('div');
    header.setAttribute("id", "header");
    
    var menuText = document.createElement('p');
    menuText.innerHTML = "Menu";
    header.appendChild(menuText);
    contentDiv.appendChild(header);
    //create header for menu

    //create div for menu items


}
export{contentDiv, addElements};