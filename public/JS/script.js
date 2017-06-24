$(document).ready(function() {
    // console.log( "haas jquery!!" );

    let catName = "";

    let mouseCount = 0;

    let catStory = "";

    let catData = [];

    const rooms = [
      {
      "id": 0,
      "name": "welcome!",
      "image": "./public/images/0-title.png",
      "options": ["click to start"],
      "clickables": [
      {
        "id": 0,
        "link": 1,
        "top": 0,
        "left": 0,
        "width": "100%"
      },
      {
        "id": 1
      }
      ],
      "status": ""  //change script to something considering edge case 0
      },
      {
      "id": 1,
      "name": "basement",
      "image": "./public/images/1-basement.png",
      "options": ["door -->","ladder -->"],
      "clickables": [
      {
        "id": 0,
        "link": 1,
        "top": 0,
        "left": 0,
        "width": "20%"
      },
      {
        "id": 1
      }
      ],
      "status": "...thinking..."
      },
      {
      "id": 2,
      "name": "utility",
      "image": "./public/images/2-boiler.png",
      "options": ["back <--"],
      "clickables": [
      {
        "id": 0,
        "link": 1,
        "top": 0,
        "left": 0,
        "width": "20%"
      },
      {
        "id": 1
      }
      ],
      "status": "...hunting..."
      },
      {
      "id": 3,
      "name": "storage",
      "image": "./public/images/3-storage.png",
      "options": ["door -->","back <--"],
      "clickables": [
      {
        "id": 0,
        "link": 1,
        "top": 0,
        "left": 0,
        "width": "20%"
      },
      {
        "id": 1
      }
      ],
      "status": "...hunting..."
      },
      {
      "id": 4,
      "name": "hallway",
      "image": "./public/images/4-hallway.png",
      "options": ["window -->","door1 -->","door2 -->","back <--"],
      "clickables": [
      {
        "id": 0,
        "link": 1,
        "top": 0,
        "left": 0,
        "width": "20%"
      },
      {
        "id": 1
      }
      ],
      "status": "...thinking..."
      },
      {
      "id": 5,
      "name": "kitchen",
      "image": "./public/images/5-kitchen.png",
      "options": ["back <--","door22 -->"],
      "clickables": [
      {
        "id": 0,
        "link": 1,
        "top": 0,
        "left": 0,
        "width": "20%"
      },
      {
        "id": 1
      }
      ],
      "status": "...eating..."
      },
      {
      "id": 6,
      "name": "outdoors",
      "image": "./public/images/6-outside.png",
      "options": [],
      "clickables": [
      {
        "id": 0,
        "link": 1,
        "top": 0,
        "left": 0,
        "width": "20%"
      },
      {
        "id": 1
      }
      ],
      "status": "You lose!"
      },
      {
      "id": 7,
      "name": "bedroom",
      "image": "./public/images/7-bedroom.png",
      "options": [],
      "clickables": [
      {
        "id": 0,
        "link": 1,
        "top": 0,
        "left": 0,
        "width": "20%"
      },
      {
        "id": 1
      }
      ],
      "status": "You win!"
      }
    ];

    //data
    //data
    //data
    //data

    let currentRoom = 0;

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
      if (currentRoom == 0) {
        let message = `${rooms[currentRoom]["name"]}`;
        M.text(message);
      } else {
        let message = `You are in the ${rooms[currentRoom]["name"]}.`;
        M.text(message);
      }
      let imageSource = `${rooms[currentRoom]["image"]}`;
      let IMGdiv = $('<div class="room-image">');
      // let BRDdiv = $('<div class="border-div">');
      IMGdiv.css("background-image", "url("+imageSource+")");


      let OPTS = $('<form class="opts">');
      catData.push(currentRoom);
      let cdStr = catData.toString();
      console.log(cdStr);

      let CATDAT = $('#cat-data');
      CATDAT.val(cdStr);

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
      DisplayUnit.append(IMGdiv);
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
          currentRoom=1;  //added to this  f e version
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

});  //doc ready func
