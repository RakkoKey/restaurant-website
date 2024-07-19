import background from './images/food.jpeg'
const contentDiv = document.getElementById("content");
const buttons = [];
var menuList = document.createElement('ul');
menuList.setAttribute("id", "menu");
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


    var mainMenubutton = document.createElement('button');
    mainMenubutton.innerHTML = "Main Menu";
    mainMenubutton.classList.add('menuButton');
    mainMenubutton.setAttribute('id', "Main")

    var kidsMenubutton = document.createElement('button');
    kidsMenubutton.innerHTML = "Kids";
    kidsMenubutton.classList.add("menuButton");
    kidsMenubutton.setAttribute('id', "Kids")

    menuButtons.append(kidsMenubutton);
    menuButtons.append(mainMenubutton);

    contentDiv.append(menuButtons);
    buttons.push(mainMenubutton);
    buttons.push(kidsMenubutton);
    //create div for menu items
    createMenu();

    //button listeners
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            switch(buttons[i].getAttribute('id')){
                case("Main"):
                    changeContent();
                    createMenu();
                    break;
                case("Kids"):
                    changeContent();
                    createKidsMenu();
                    break;

            }
        });
    }

}
function createMenu(){
    
    
    
    
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
        span.innerHTML = "$" + priceItems[i];
        newElement.appendChild(span);
        

        
        menuListItems.push(newElement);
    }
    contentDiv.appendChild(menuList);
    
    for(let j = 0; j < menuListItems.length; j++){
        menuList.appendChild(menuListItems[j]);
    }
}

function createKidsMenu(){  
    const menuItems = ["Chicken Tenders", "Chicken Nuggets", "Fries", "Apple Slices"];
    const priceItems = ["8", "5", "4", "3"];
    const itemsdescription = ["Long, chicken tenders made for a child to enjoy", "Bite-sized nuggets for kids", "Freshly cut potato fries with a dash of salt and pepper", "Refreshing apple slices for a healthy snack"];
    const menuListItems = [];

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
        span.innerHTML = "$" + priceItems[i];
        newElement.appendChild(span);
        

        
        menuListItems.push(newElement);
    }
    contentDiv.appendChild(menuList);
    
    for(let j = 0; j < menuListItems.length; j++){
        menuList.appendChild(menuListItems[j]);
    }

}


function changeContent(){
    while(menuList.firstChild){
        menuList.removeChild(menuList.lastChild);
    }
}

export{contentDiv, createMenu, addElements};