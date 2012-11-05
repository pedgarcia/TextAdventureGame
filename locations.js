/*begin location functions
// these functions are assigned to one location each
*/

function startingLocation(){
        var setMsg = "You wake up on plush carpet in a sparsely decorated room. You don't recognize where you are and feel uneased by how quiet it is. Looking around, you see 4 different ways out of this room. Perhaps someone else is here...";
        updateDisplay(setMsg);
        updateLocation("home");
        enableAllDirections();
}

function libraryMain(){
        var setMsg ="You enter a room lined with books and a small fireplace sits inside the opposite wall. A fine Persian carpet fills the floor and the air is musky. It seems like no one has been in this room for a while.";
        addVisited("library");
        updateDisplay(setMsg);
        updateLocation("library");

        //deals with enable/disabling direction buttons
        enableAllDirections();
        disableDirection("west");
        disableDirection("east");
}

function northEndLibrary(){
    var setMsg = "You walk towards a bookcase opposite the door. Most of these books seem fairly old and have accumulated years of dust. However, one book seems to have been recently added to this library. It is titled 'Escaping' by Randy Butternubs.";
        updateDisplay(setMsg);
        updateLocation("northendLibrary");
        addVisited("northendLibrary");

 //deals with enable/disabling direction buttons
        enableAllDirections();
        disableDirection("east");
        disableDirection("west");
        disableDirection("north");
}

function artHall(){
    var setMsg ="There is a double door at the end of the hallway. Several abstract paintings line the hallway. Some of these paintings are crooked.";
    addVisited("artHall");
    updateDisplay(setMsg);
    updateLocation("artHall");

     //deals with enable/disabling direction buttons
    enableAllDirections();
    disableDirection("west");
}

function windowWall(){

    if(hasItem('map')){
        var setMsg ="You face a small window with cast iron bars welded to the outside. There is tape residue from the map you took.";
    }
    else{
        var setMsg ="You face a small window with cast iron bars welded to the outside. There is a piece of paper taped to the window.";
    }
    
    addVisited("windowWall");
    updateDisplay(setMsg);
    updateLocation("windowWall");

 //deals with enable/disabling direction buttons
    enableAllDirections();
    disableDirection("south");
    disableDirection("north");
    disableDirection("east");
}

function kitchen(){
    var setMsg ="You enter an immaculate kitchen with white walls and a linoleum floor. There is a small cellar door next to the counter. \n\n **HINT: The next step requires textbox input!**";
    addVisited("kitchen");
    updateDisplay(setMsg);
    updateLocation("kitchen");

 //deals with enable/disabling direction buttons
    enableAllDirections();
    disableDirection("north");
    disableDirection("south");
    disableDirection("west");

}

function viewPainting(){
    var setMsg = "You turn and look at the crooked painting. It's a family portrait, but none of these people have faces. The exposed wall where the painting is tilted away from seems a lot cleaner than the rest of the wall...";
    updateDisplay(setMsg);
    addVisited("painting");
    updateLocation("painting");

 //deals with enable/disabling direction buttons
    enableAllDirections();
    disableDirection("east");
    disableDirection("west");
}

//enter cellar if and ONLY IF they are in the kitchen. If they are not coming from the kitchen, throw invalid command error
function enterCellar(){ 
     var setMsg = "You open the door and descend the stairs to the cellar. The cellar has a dirt floor and rotten wooden posts supporting the ceiling. Suddenly, a growling dog approaches you. He doesn't seem friendly!";
    if(hasVisited("cellar") === false && currentLocation === "kitchen"){
        enableAllDirections();
        updateScore(10);
        addVisited("cellar");
        updateDisplay(setMsg);
        updateLocation("cellar");

         //deals with enable/disabling direction buttons
        disableDirection("north");
        disableDirection("south");
        disableDirection("west");
        disableDirection("east");

    }
    else if(currentLocation === "kitchen" && hasVisited("cellar") === true){
        currentLocation = "cellar";
        enableAllDirections();
        updateDisplay(setMsg);
        updateLocation("cellar");

         //deals with enable/disabling direction buttons
        disableDirection("north");
        disableDirection("south");
        disableDirection("west");
        disableDirection("east");
    }
    else if (currentLocation != "kitchen"){
        setMsg = "Invalid command. Please try another command.";
        updateDisplay(setMsg);
    }
    
}

function exitCellar(){
    if(currentLocation === "cellar"){
        kitchen();
    }
    else{
        setMsg = "You can't do that yet! Please try another command.";
        updateDisplay(setMsg);
    }
}

