$(document).ready(function() {
    // console.log( "haas jquery!!" );

    let catName = "";  //how do I get this from userdata?

    let mouseCount = 0;

    let catStory = "";

    let catData = {};

    const rooms = [
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
    ];

    let currentRoom = 1;

    let initState = function(room) {
      console.log("initial state " + room);
    };

    initState(currentRoom);

    let userChoice = function(e) {
      e.preventDefault();
      let choice = e.data.option;
      let room = e.data.room;
      changeState(room,choice);
    };

    let GameUnit = $('#game-unit');

    let createState = function () {
      console.log("createState called");

      let M = $('<div class="message">');
      //if/else to handle currentRoom = 0
      let message = `You are in the ${rooms[currentRoom]["name"]}`;
      M.text(message);
      let imageSource = `${rooms[currentRoom]["image"]}`;
      let IMG = $('<img>');
      IMG.attr({src:imageSource});

      //action refers to route, method refers to verb
      let OPTS = $('<form class="options">');

      let optionsArr = rooms[currentRoom]["options"];

      optionsArr.forEach(function(option){
        let BUTT = $(`<button class="opt">${option}</button>`);
        BUTT.click({room: currentRoom, option: option}, userChoice);
        OPTS.append(BUTT);
      });

      let status = `${rooms[currentRoom]["status"]}`;
      let STAT = $('<div class="'+status+'">');
      STAT.text(status);

      GameUnit.empty();
      //remove all children from GameUnit

      //DOM is painted
      GameUnit.append(M);
      GameUnit.append(IMG);
      GameUnit.append(OPTS);
      GameUnit.append(STAT);

    };
    //merely builds the thing to render
    createState();

    //BE update should be routed so in app.js upon win or lose state e.g. rooms 6 and 7
    //catData and catStory are stored to db


    let changeState = function(room,choice) {
      console.log("changeState called");
      switch (room) {
        case 0: //title
          console.log("case 0");
          //CLICK!!
          break;
        case 1: //basement
          console.log("case 1");
          //choice 0 = ladder // choice 1 = hole
          break;
        case 2: //boiler
          console.log("case 2");
          //choice 0 = back
          break;
        case 3: //storage (up ladder)
          console.log("case 3");
          //choice 0 = through // choice 1 = back (basement)
          break;
        case 4: //hallway
          console.log("case 4");
          //choice 0 = door1(kitchen) // choice 1 = door2(bedroom) // choice 3 = window
          break;
        case 5: //kitchen (door1)
          console.log("case 5");
          //choice 0 = door22(bedroom) // choice 1 = back (hallway)
          break;
        case 6: //outside
          console.log("case 6");
          //LOSE!!
          break;
        case 7: //bedroom
          console.log("case 7");
          //WIN!!
          break;
        default:
          console.log("shit ain't working");
      };
      console.log("change of state " + room + " " + choice);
      createState();
      //updating the game-unit, currentRoom, and mouseCount
    };

    // M V P

    //special game-units for title page and story returned to UI
    //animation/domgame of mouse hunts
    //refine graphics and UX

    //also variables like catStory, and catData should be constructed when the user makes 'decisions'
    //posting catStory and catData obj to db. i.e. buttons hit post routes on server

});  //doc ready func
