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

    var menuButtons = document.createElement('div');
    menuButtons.setAttribute('id', "menuButtons");

    var kidsMenubutton = document.createElement('button');
    kidsMenubutton.innerHTML = "Kids";
    kidsMenubutton.classList.add("menuButton");

    menuButtons.append(kidsMenubutton);
    contentDiv.append(menuButtons);
    
    
    //create header for menu;

    //create div for menu items
    createMenu();

}
function createMenu(){
    
    var menuList = document.createElement('ul');
    
    menuList.setAttribute("id", "menu");
    const menuItems = ["Sandwich", "Salad", "Burger", "Pasta", "Pizza", "Cake"];
    const priceItems = ["10", "12", "13", "11", "15", "8"];
    const itemsdescription = ["A hearty sandwich containing turkey slices, iceberg lettuce, tomato, with a slice of cheddar cheese",
        "A caesar salad with parmasean, cherry tomatoes, and fresh lettuce ", "The most classic a burger can get", "Simple, yet delicious alfredo pasta", "Pepperoni pizza, thats about it", 
        "A sweet vanilla cake topped with strawberries"];
    const menuListItems= [];
    for(let i = 0; i < menuItems.length; i++){
        var newElement = document.createElement('li');

        var itemDiv = document.createElement('div');
        itemDiv.classList.add("foodName");
        itemDiv.innerHTML = menuItems[i];

        var description = document.createElement('p');
        description.classList.add("description");
        description.innerHTML = itemsdescription[i];

        itemDiv.appendChild(description);


        newElement.appendChild(itemDiv);
        var span = document.createElement('span');
        span.innerHTML = "$"
        newElement.innerHTML += ("$" + priceItems[i]);
        

        
        menuListItems.push(newElement);
    }
    contentDiv.appendChild(menuList);
    
    for(let j = 0; j < menuListItems.length; j++){
        menuList.appendChild(menuListItems[j]);
    }
}
export{contentDiv, createMenu, addElements};