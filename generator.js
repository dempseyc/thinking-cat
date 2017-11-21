
// this generates seed data of the form:
// INSERT INTO cats(email,password_digest,catname,story,data)
// VALUES ('test1@nologin.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','cat1','nostory','[1,3,4,5,7]');


// rules for dataArray
// push 1 hold 1 as position
// if position is one, next push 2 or 3
// if position is 2, next push 1
// if position is 3, next push 1 or 4
// if position is 4, next push  3, 5, 6, or 7
// if position is 5, next push 4 or 7
// if position is 7 or 6 return

function constructString () {

  // init return value
  let sql;

  // define utilities

  let random = function (numOptions) {
    return Math.floor(Math.random()*numOptions);  // return 0-numOptions minus 1
  }

  // define dependencies

  let makeName = function () {

    // init return value
    let name;

    // static data
    let pre = ['Per','Sus','In','Des','Mer','Di','As','Mo','Nin','Qua','Dre'];
    let mid = ['sep','clip','dip','on','ov','clod','brof','clef','din','menos','bevos','clev'];
    let post = ['oclese','inac','ovres','erat','om','enes','omid','idus','tine','oby'];

    let thePre = pre[random(pre.length)];
    let theMid = mid[random(mid.length)];
    let thePost = post[random(post.length)];

    name = `${thePre}${theMid}${thePost}`;
    return name;

  }

  let makeEmail = function(name,domain,dot) {
    let email = name+"@"+domain+dot;
    return email;
  }

  // consume dependencies
  let dataArray = makeBehavior();
  let name = makeName();
  let domain = 'virtualcats';
  let dot = '.com';
  let email = makeEmail(name,domain,dot);
  let hash = "$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D";



  sql = "INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('"+email+"','"+hash+"','"+name+"','nostory','"+dataArray+"');"

  console.log(sql);
}

function makeBehavior () {

  // initialize parameters

  let randomCatData = [1];
  let prevPosition = 0;
  let catPosition = 1;


  // static data
  let options = [
     [],
     [2,3],
     [1],
     [1,4],
     [3,5,6,7],
     [4,7],
     [],
     []
  ];


  // define utilities

  let randomChoice = function (numOptions) {
    return Math.floor(Math.random()*numOptions);  // return 0-numOptions minus 1
  };

  let choosePossibleCatMove = function () {
    let possibilities = options[catPosition];
    let choice = randomChoice(possibilities.length);
    return possibilities[choice];
  };

  let updateCatPosition = function (choice) {
    prevPosition = catPosition;
    catPosition = choice;
    randomCatData.push(choice);
  };


  // main function

  let makeThoughtfulChoice = function () {

    // initialize return value
    let possChoice;

    //define some functions

    let countTimesBeenThere = function(choice) {
      let numTimes = 0;
      for (i=randomCatData.length-1;i>=0;i--) {
        if (possChoice===randomCatData[i]) {
          numTimes++;
        }
      }
      return numTimes;
    };

    let dontGoBack = function (choice) {
      let bias = countTimesBeenThere(choice);
      while (possChoice === prevPosition && bias>0) {
        possChoice = choosePossibleCatMove();
        bias--;
      }
    };

    //execute
    possChoice = choosePossibleCatMove();
    dontGoBack(possChoice);  // reset poss choice if cat is going back
    return possChoice;

  } // end makeThoughtfulChoice


  let makeThoughtfulMoves = function () {
    while (catPosition !== 6 && catPosition !== 7) {
      updateCatPosition(makeThoughtfulChoice());
    }
  }

  makeThoughtfulMoves();
  return randomCatData;

}; // end makeBehavior

// console.log(makeBehavior());
console.log(constructString());
