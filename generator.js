// this generates seed data of the form:
// INSERT INTO cats(email,password_digest,catname,story,data)
// VALUES ('test1@nologin.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','cat1','nostory','[1,3,4,5,7]');

// define utilities
let randomChoice = function (numOptions) {
  return Math.floor(Math.random()*numOptions);  // return 0-numOptions minus 1
};

// main function
let constructString = function  () {

  // init return value
  let sql;

  // define internal functions
  let makeName = function () {

    // init return value
    let name;

    // static data
    let pre = ['Per','Sus','El','Des','Mer','Di','Az','Mo','Nin','Qua','Dre','Flo','Smer','Bim','Flim','Tur','Chip','Cro','Shu','Ip','Kra','Je','Gin', 'Lic', 'In'];
    let mid = ['sep','clip','dip','on','ov','clod','brof','clef','din','menos','bevos','clev','pap','zip','bup','trap','tip','bep','uor','ner','nu','tuib','mun','map','menc','kip','','','','','','','','','',''];
    let post = ['oclese','inac','ovrese','erat','efraime','inom','erope','iff','om','enese','omid','idus','tine','oby','erone','amede'];

    let thePre = pre[randomChoice(pre.length)];
    let theMid = mid[randomChoice(mid.length)];
    let thePost = post[randomChoice(post.length)];

    name = `${thePre}${theMid}${thePost}`;
    return name;

  };

  // let makeEmail = function(name,domain,dot) {
  //   let email = name+"@"+domain+dot;
  //   return email;
  // };

  let makeBehavior = function () {

    // initialize return value
    let randomCatData = [1];

    // vars
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

    // define functions
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
      dontGoBack(possChoice);  // maybe reset possChoice if cat is going back

      return possChoice;

    }; // end makeThoughtfulChoice

    let makeThoughtfulMoves = function () {
      while (catPosition !== 6 && catPosition !== 7) {
        updateCatPosition(makeThoughtfulChoice());
      }
    };

    makeThoughtfulMoves();

    return randomCatData;

  }; // end makeBehavior

  // execute
  let dataArray = makeBehavior();
  let name = makeName();

  sql = "INSERT INTO cats(catname,story,data) VALUES ('"+name+"','nostory','"+dataArray+"');"

  return sql;

}; // end constructString

////////  PRINTOUT
function printMany (num) {
  for ( let i=0; i<num; ++i ) {
    let string = constructString();

    console.log(string);

  }
}

printMany(100);
