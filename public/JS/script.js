$(document).ready(function() {
    // console.log( "haas jquery!!" );

    let catName = "";  //how do I get this from userdata?

    let mouseCount = 0;

    let catStory = "";

    let catData = [];

    const rooms = [
      {
      "id": 0,
      "name": "title",
      "image": "/images/0-title.gif",
      "status": "<click to start>",
      "options": ["click"]
      },
      {
      "id": 1,
      "name": "basement",
      "image": "/images/1-basement.png",
      "status": "...hunting...",
      "options": ["ladder -->","door -->"]
      },
      {
      "id": 2,
      "name": "utility",
      "image": "/images/2-boiler.png",
      "options": ["back <--"],
      "status": "...hunting..."
      },
      {
      "id": 3,
      "name": "storage",
      "image": "/images/3-storage.png",
      "options": ["back <--","door -->"],
      "status": "...hunting..."
      },
      {
      "id": 4,
      "name": "hallway",
      "image": "/images/4-hallway.png",
      "options": ["door1 -->","door2 -->","window -->","back <--"],
      "status": "...thinking..."
      },
      {
      "id": 5,
      "name": "kitchen",
      "image": "/images/5-kitchen.png",
      "options": ["back <--","door22 -->"],
      "status": "...eating..."
      },
      {
      "id": 6,
      "name": "outdoors",
      "image": "/images/6-outside.png",
      "options": [],
      "status": "You lose!"
      },
      {
      "id": 7,
      "name": "bedroom",
      "image": "/images/7-bedroom.png",
      "options": [],
      "status": "You win!"
      }
    ];

    let currentRoom = 1;

    let initState = function(room) {
      console.log("initial state " + room);
    };

    initState(currentRoom);

    let userChoice = function(e) {
      e.preventDefault();
      changeState(e.data.room, e.data.option);
    };

    let DisplayUnit = $('#display-unit');

    let updateDOM = function () {
      console.log("updateDOM called");

      let M = $('<div class="message">');
      //if/else to handle currentRoom = 0
      let message = `You are in the ${rooms[currentRoom]["name"]}`;
      M.text(message);
      let imageSource = `${rooms[currentRoom]["image"]}`;
      let IMGdiv = $('<div class="room-image">');
      let BRDdiv = $('<div class="border-div">');
      IMGdiv.css("background-image", "url("+imageSource+")");
      BRDdiv.append(IMGdiv);

      // still trying to get catdata updated in db

      let OPTS = $('<form class="options">');
      catData.push(currentRoom);
      console.log(catData);

      //working up to this point
      let CATDAT = $('<input type="hidden" name="catdata" value="'+catData+'">');
      OPTS.append(CATDAT);

      let optionsArr = rooms[currentRoom]["options"];

      optionsArr.forEach(function(option){
        let BUTT = $(`<button type="submit" class="opt">${option}</button> <br />`);
        BUTT.click({room: currentRoom, option: option}, userChoice);
        OPTS.append(BUTT);
      });

      let status = `${rooms[currentRoom]["status"]}`;
      let STAT = $('<div class="status">');
      STAT.text(status);

      //remove all children from DisplayUnit
      DisplayUnit.empty();

      //DOM is painted
      DisplayUnit.append(M);
      DisplayUnit.append(BRDdiv);
      DisplayUnit.append(OPTS);
      DisplayUnit.append(STAT);

    };
    //builds the thing to render and adds data to catData
    updateDOM();

    let changeState = function(room,choice) {
      console.log("changeState called");
      switch (room) {
        case 0: //title
          console.log("case 0");
          //CLICK!!
          break;
        case 1: //basement
          if (choice=="door -->"){
            currentRoom=2;
          };
          if (choice=="ladder -->"){
            currentRoom=3;
          };
          break;
        case 2: //boiler
          console.log("case 2");
          if (choice=="back <--"){
            currentRoom=1;
          };
          break;
        case 3: //storage (up ladder)
          console.log("case 3");
          if (choice=="back <--"){
            currentRoom=1;
          };
          if (choice=="door -->"){
            currentRoom=4;
          };
          break;
        case 4: //hallway
          if (choice=="door1 -->"){
            currentRoom=5;
          };
          if (choice=="door2 -->"){
            currentRoom=7;
          };
          if (choice=="window -->"){
            currentRoom=6;
          };
          if (choice=="back <--"){
            currentRoom=3;
          };
          break;
        case 5: //kitchen (door1)
          if (choice=="door22 -->"){
            currentRoom=7;
          };
          if (choice=="back <--"){
            currentRoom=4;
          };
          break;
        case 6: //outside
          //LOSE!!
          break;
        case 7: //bedroom
          //WIN!!
          break;
        default:
          console.log("ain't working");
      };
      console.log("change of state " + room + " " + choice);
      updateDOM();
      //updating the display-unit, currentRoom, and mouseCount
    };

    // M V P

    //special display-unit for title page and story returned to UI
    //animation/domgame of mouse hunts
    //refine graphics and UX

    //also variables like catStory, and catData should be constructed when the user makes 'decisions'
    //posting catStory and catData obj to db. i.e. buttons hit post routes on server

});  //doc ready func
