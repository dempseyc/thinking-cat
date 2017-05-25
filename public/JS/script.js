$( document ).ready(function() {
    console.log( "haas jquery!!" );


    let catName = "";  //how do I get this from userdata.. need an include or something?

    let mouseCount = 0;

    let catStory = "";

    let catData = "";

    let rooms = [
      {
      "id": 0,
      "name": "title",
      "image": "/images/0-title.gif",
      "status": "click to start"
      },
      {
      "id": 1,
      "name": "basement",
      "image": "/images/1-basement.gif",
      "status": "hunting"
      },
      {
      "id": 2,
      "name": "utility",
      "image": "/images/2-boiler.gif",
      "status": "hunting"
      },
      {
      "id": 3,
      "name": "storage",
      "image": "/images/3-storage.gif",
      "status": "hunting"
      },
      {
      "id": 4,
      "name": "hallway",
      "image": "/images/4-hallway.gif",
      "status": "thinking"
      },
      {
      "id": 5,
      "name": "kitchen",
      "image": "/images/5-kitchen.gif",
      "status": "eating"
      },
      {
      "id": 6,
      "name": "outside",
      "image": "/images/6-outside.gif",
      "status": "YOU LOSE!"
      },
      {
      "id": 7,
      "name": "bedroom",
      "image": "/images/7-bedroom.gif",
      "status": "YOU WIN!"
      }
    ]

    let currentRoom = 1;
    // build this with jquery

    /*
    <div class="message">
    <p>YOU ARE IN THE BASEMENT</p>
    </div>
    <div class="image">
    <h1>[]</h1>
    </div>
    <div class="options">
    options
    <h2>{}{}{}</h2>
    </div>
    <div class="status"><h3>"playing"</h3></div>
    */

    let GameUnit = $('#game-unit');

    let M = $('<div class="message">'); //works
    //if/else to handle currentRoom = 0
    let message = `You are in the ${rooms[currentRoom]["name"]}`; //works
    M.text(message); //works
    let imageSource = `${rooms[currentRoom]["image"]}`; //works
    let IMG = $('<img>'); //works
    IMG.attr({src:imageSource});  //add altlater //works



    //build out buttons and append to OPT
    //
    let OPT = $('<form class="options">');
    ////need to plan out the options form with multiple buttons, scaling depending on the number of buttons and options according to game-play
    let status = `${rooms[currentRoom]["status"]}`;
    let STAT = $('<div class="'+status+'">');
    STAT.text(status);

    GameUnit.append(M);
    GameUnit.append(IMG);
    GameUnit.append(OPT);
    GameUnit.append(STAT);

    //still need to addchild to dom and append to GameUnit.
    //then start debugging


    //some functions for updating the currentRoom, game-unit, mouseCount, catStory, and catData
    //functions for posting catStory and catData to db. i.e. buttons hit post routes on server

    // M V P

    //special game-units for title page and story return to UI
    //animation of mouse hunts
    //refine graphics and UX

});  //doc ready func
