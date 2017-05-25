$( document ).ready(function() {
    console.log( "haas jquery" );

    let catName = "";  //how do I get this from userdata.. need an include or something?

    let mouseCount = 0;

    let catStory = "";

    let catData = "";

    let rooms = [
      {
      "name": "basement",
      "image": "/images/1-basement.gif",
      "status": "hunting"
      },
      {
      "name": "utility",
      "image": "/images/2-boiler.gif",
      "status": "hunting"
      },
      {
      "name": "storage",
      "image": "/images/3-storage.gif",
      "status": "hunting"
      },
      {
      "name": "hallway",
      "image": "/images/4-hallway.gif",
      "status": "thinking"
      },
      {
      "name": "kitchen",
      "image": "/images/5-kitchen.gif",
      "status": "eating"
      },
      {
      "name": "outside",
      "image": "/images/6-outside.gif",
      "status": "YOU LOSE!"
      },
      {
      "name": "bedroom",
      "image": "/images/7-bedroom.gif"
      "status": "YOU WIN!"
      }
    ]

    let GameUnit = $('#game-unit');
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
    <div class="message"><h3>"playing"</h3></div>
    */

    //some functions for updating the game-unit, mouseCount, catStory, and catData
    //functions for posting catStory and catData to db. i.e. buttons hit post routes on server

    // M V P

    //special game-units for title page and story return to UI
    //animation of mouse hunts
    //refine graphics and UX

});
