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
    createMenu();

}
function createMenu(){
    var menuBox = document.createElement('div');
    var menuList = document.createElement('ul');

    const menuItems = ["Sandwich", "Salad", "Burger", "Pasta"];
    const priceItems = ["10", "12", "13", "11"];
    const menuListItems= [];
    for(let i = 0; i < menuItems.length; i++){
        var newElement = document.createElement('li');

        var itemDiv = document.createElement('div');
        itemDiv.innerHTML = menuItems[i];
        newElement.appendChild(itemDiv);

        newElement.innerHTML += priceItems[i];
        

        
        menuListItems.push(newElement);
    }
    contentDiv.appendChild(menuBox);
    menuBox.appendChild(menuList);
    for(let j = 0; j < menuListItems.length; j++){
        menuList.appendChild(menuListItems[j]);
    }
}
export{contentDiv, createMenu, addElements};