$( document ).ready(function() {
    // console.log( "haas jquery!!" );

    let catName = "";  //how do I get this from userdata.. need an include or something?

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
    }

    initState(currentRoom);

    //merely builds the thing to render
    let GameUnit = $('#game-unit');

    let M = $('<div class="message">');
    //if/else to handle currentRoom = 0
    let message = `You are in the ${rooms[currentRoom]["name"]}`;
    M.text(message);
    let imageSource = `${rooms[currentRoom]["image"]}`;
    let IMG = $('<img>');
    IMG.attr({src:imageSource});

    let changeState = function(room,choice) {
      switch (room) {
        case 0:
          console.log("case 0");
          break;
        case 1:
          console.log("case 1");
          break;
        case 2:
          console.log("case 2");
          break;
        case 3:
          console.log("case 3");
          break;
        case 4:
          console.log("case 4");
          break;
        case 5:
          console.log("case 5");
          break;
        case 6:
          console.log("case 6");
          break;
        case 7:
          console.log("case 7");
          break;
        default:
          console.log("shit ain't working");
      };
      //posting catStory and catData obj to db. i.e. buttons hit post routes on server
      console.log("change of state " + room + " " + choice);
      render();
      //updating the game-unit, currentRoom, mouseCount, catStory, and catData
    }

    let userChoice = function(e) {
      let choice = e.data.option;
      let room = e.data.room;
      changeState(room,choice);
    };

    //action refers to route, method refers to verb
    let OPTS = $('<form class="options">');
    // ERROR cannot post comes in here

    let optionsArr = rooms[currentRoom]["options"];

    optionsArr.forEach(function(option){
      let BUTT = $(`<button class="opt">${option}</button>`);
      BUTT.click({room: currentRoom, option: option}, userChoice);
      OPTS.append(BUTT);
    })

    let status = `${rooms[currentRoom]["status"]}`;
    let STAT = $('<div class="'+status+'">');
    STAT.text(status);

    function render () {
      //shall be called upon changeState
      GameUnit.empty();
      //remove all children from GameUnit

      //DOM is painted
      GameUnit.append(M);
      GameUnit.append(IMG);
      GameUnit.append(OPTS);
      GameUnit.append(STAT);
      //also variables like mouseCount, catStory, and catData should be constructed when the user makes 'decisions'
    }

    render();
    //BE update should be routed so in app.js upon win or lose state e.g. rooms 6 and 7

    // M V P

    //special game-units for title page and story return to UI
    //animation of mouse hunts
    //refine graphics and UX

});  //doc ready func
