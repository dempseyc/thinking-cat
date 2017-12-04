let catData = [];

const rooms = [
  {
  'id': 0,
  'name': 'welcome!',
  'image': '../images/0-title.png',
  'options': [{
    'str': '- click to start',
    'clickable': '<area class="id1" shape="rect" coords="0,0,800,522" href="logsign.html" alt="alt" />',
    'linkto': 1
  }],
  'status': ' '
  },
  {
  'id': 1,
  'name': 'basement',
  'image': '../images/1-basement.png',
  'options': [{
    'str':'- door -->',
    'clickable': '<area class="id2" shape="rect" coords="200,150,350,400" href="logsign.html" alt="alt" />',
    'linkto': 2,
  },{
    'str': '- ladder -->',
    'clickable': '<area class="id3" shape="rect" coords="550,0,800,522" href="logsign.html" alt="alt" />',
    'linkto': 3
  }],
  'status': '...thinking...'
  },
  {
  'id': 2,
  'name': 'utility',
  'image': '../images/2-boiler.png',
  'options': [{
    'str': '- back <--',
    'clickable': '<area class="id1" shape="rect" coords="0,0,1160,838" href="logsign.html" alt="alt" />',
    'linkto': 1
  }],
  'status': '...hunting...'
  },
  {
  'id': 3,
  'name': 'storage',
  'image': '../images/3-storage.png',
  'options': [{
    'str': '- door -->',
    'clickable': '<area class="id4" shape="rect" coords="320,0,500,320" href="logsign.html" alt="alt" />',
    'linkto': 4
  },{
    'str': '- back <--',
    'clickable': '<area class="id1" shape="rect" coords="600,420,800,522" href="logsign.html" alt="alt" />',
    'linkto': 1
  }],
  'status': '...hunting...'
  },
  {
  'id': 4,
  'name': 'hallway',
  'image': '../images/4-hallway.png',
  'options': [{
    'str': '- window -->',
    'clickable': '<area class="id6" shape="rect" coords="480,250,570,300"" href="logsign.html" alt="alt" />',
    'linkto': 6
  },{
    'str': '- door1 -->',
    'clickable': '<area class="id7" shape="rect" coords="585,100,640,440" href="logsign.html" alt="alt" />',
    'linkto': 7
  },{
    'str': '- door2 -->',
    'clickable': '<area class="id5" shape="rect" coords="750,0,800,522" href="logsign.html" alt="alt" />',
    'linkto': 5
  },{
    'str': '- back <--',
    'clickable': '<area class="id3" shape="rect" coords="240,450,360,522" href="logsign.html" alt="alt" />',
    'linkto': 3
  }],
  'status': '...thinking...'
  },
  {
  'id': 5,
  'name': 'kitchen',
  'image': '../images/5-kitchen.png',
  'options': [{
    'str': '- door back to hallway <--',
    'clickable': '<area class="id4" shape="rect" coords="20,60,200,500" href="logsign.html" alt="alt" />',
    'linkto': 4
  },{
    'str': '- door -->',
    'clickable': '<area class="id7" shape="rect" coords="440,180,580,380" href="logsign.html" alt="alt" />',
    'linkto': 7
  }],
  'status': '...eating...'
  },
  {
  'id': 6,
  'name': 'outdoors',
  'image': '../images/6-outside.png',
  'options': [],
  'status': 'You lose!'
  },
  {
  'id': 7,
  'name': 'bedroom',
  'image': '../images/7-bedroom.png',
  'options': [],
  'status': 'You win!'
  }
];

//data
//data
//data
//data

let currentRoom = 1;
//caching dom
let DisplayUnit = $('#display-unit');
let M = $('.message');
let IMGdiv = $('.room-image');
let STAT = $('.status');
let OPTS = $('.options');
let CATDAT = $('#cat-data');
let areaMAP = $('#map');
let Result = $('#result');

let makeResultLinkVisible = function() {
  Result.css({'opacity': 1});
}

let userChoice = function(e) {
  changeState(e.data.room, e.data.option);
};

let updateDOM = function () {

  // console.log('updateDOM called currentRoom '+currentRoom);

  if (currentRoom == 0) {
    let message = `${rooms[currentRoom]['name']}`;
    M.text(message);
  } else {
    let message = `You are in the ${rooms[currentRoom]['name']}.`;
    M.text(message);
  }

  let BGimageSource = `${rooms[currentRoom]['image']}`;
  IMGdiv.css('background-image', 'url('+BGimageSource+')');

  catData.push(currentRoom);
  let cdStr = catData.toString();
  console.log('interactions ' + cdStr);

  let status = `${rooms[currentRoom]['status']}`;

  STAT.text(status);

  OPTS.empty();
  areaMAP.empty();
  let optionsArr = rooms[currentRoom]['options'];
  optionsArr.forEach(function(option){

    let BUTT = $(`<div class='opt'>${option.str}</div>`);
    BUTT.click({room: currentRoom, option: option.linkto}, userChoice);
    OPTS.append(BUTT);

    let AREA = option.clickable;
    AREA += areaMAP.html();
    areaMAP.html(AREA);

    // jquery area map classes and their on_click functions
    for (let room=1;room<8;room++) {
      $(`.id${room}`).on('click', function (e) {
        e.preventDefault();
        changeState(currentRoom,room);
      });
    }

  });

  CATDAT.val(cdStr);

  if ( currentRoom == 6 || currentRoom == 7 ) {
    makeResultLinkVisible();
  }

};  // end updateDOM

updateDOM();

let changeState = function(room,choice) {
  currentRoom = choice;;
  updateDOM();
};

