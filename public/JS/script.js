$( document ).ready(function() {
    console.log( "haas jquery!!" );


    let catName = "";  //how do I get this from userdata.. need an include or something?

    let mouseCount = 0;

    let catStory = "";

    let catData = {};

    let rooms = [
      {
      "id": 0,
      "name": "title",
      "image": "/images/0-title.gif",
      "status": "click to start",
      "options": ["click"]
      },
      {
      "id": 1,
      "name": "basement",
      "image": "/images/1-basement.gif",
      "status": "hunting",
      "options": ["ladder","hole"]
      },
      {
      "id": 2,
      "name": "utility",
      "image": "/images/2-boiler.gif",
      "options": ["back"],
      "status": "hunting"
      },
      {
      "id": 3,
      "name": "storage",
      "image": "/images/3-storage.gif",
      "options": ["back","door"],
      "status": "hunting"
      },
      {
      "id": 4,
      "name": "hallway",
      "image": "/images/4-hallway.gif",
      "options": ["door1","door2","window"],
      "status": "thinking"
      },
      {
      "id": 5,
      "name": "kitchen",
      "image": "/images/5-kitchen.gif",
      "options": ["back","door22"],
      "status": "eating"
      },
      {
      "id": 6,
      "name": "outside",
      "image": "/images/6-outside.gif",
      "options": [],
      "status": "YOU LOSE!"
      },
      {
      "id": 7,
      "name": "bedroom",
      "image": "/images/7-bedroom.gif",
      "options": [],
      "status": "YOU WIN!"
      }
    ]

    let currentRoom = 1;

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
    let BUTTS = [];

    //swich case scenario, depending upon the currentRoom #;


    //stuff like

    let optionsArr = `${rooms[currentRoom]["options"]}`


    ////need to plan out the options form with multiple buttons appended, scaling depending on the number of buttons and options according to game-play scenario

    let status = `${rooms[currentRoom]["status"]}`;
    let STAT = $('<div class="'+status+'">');
    STAT.text(status);

    //DOM is painted
    GameUnit.append(M);
    GameUnit.append(IMG);
    GameUnit.append(OPT);
    GameUnit.append(STAT);

    //some functions for updating the currentRoom, game-unit remove and append, mouseCount, catStory, and catData
    //functions for posting catStory and catData obj to db. i.e. buttons hit post routes on server

    // M V P

    //special game-units for title page and story return to UI
    //animation of mouse hunts
    //refine graphics and UX

});  //doc ready func
