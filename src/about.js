const contentDiv = document.getElementById("content");
class topicHeader{
    constructor(){
        this.element = document.createElement("h4");
        this.element.classList.add("topics");
    }
}
function addDescription(){
    

    var header = document.createElement("div");
    header.setAttribute('id', "header");
    

    var menuText = document.createElement('h1');
    menuText.innerHTML = "About";
    menuText.setAttribute("id", "herotext");
    header.appendChild(menuText);
    
    contentDiv.appendChild(header);



    var descDiv = document.createElement('div');
    descDiv.setAttribute('id', "menu");
    //topic header
    var topic1 = new topicHeader();
    topic1.element.innerHTML = "Who are we?";
    //console.log(topic1.element);
    descDiv.appendChild(topic1.element);


    var topic1desc = document.createElement('p');
    topic1desc.innerHTML = "We are a very generic restaurant that contains no special names for food. We tell you straight up what we offer. At a reasonable price. We believe in transparency in our ingredients since day 1 when we found- I'm just kidding I made it up.";
    descDiv.appendChild(topic1desc);
    contentDiv.appendChild(descDiv);
    




}
export{addDescription};