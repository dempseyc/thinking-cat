let allCatData;
let myCatData;

// works
// what is a more environment-specific url?
d3.json('http://localhost:3000/results/results', function(data) {
  // console.log(data);
  allCatData = data[0].all_cat_array;
  myCatData = $('#cat-data').val();
  myCatData = myCatData.split(',');
  console.log("all cat data", allCatData, "my cat data", myCatData);
  // d3_average is a value i might want to apply to d3
  let d3_average = averageStoryLength(allCatData,myCatData);
  // let d3 rooms two and four
  // let d3 room 6 or 7 as the last room in myCatData
  // and more
});

// now i can program!!

// finally!!

function averageStoryLength(allCats,myCat) {

  //////// works
  let totalOfAllStories = function (allCats) {
    // high order later
    let acc = 0;
    // you would want a reduce rather than a forEach ?
    allCats.forEach( cat => {
      acc += cat.length;
    });
    return acc;
  }

  /////// doesn't work  find out why
  /////// returns are cray zay
  // let totalOfAllStories = function (allCats) {
  //   let totalOfAll = allCats.reduce( (acc,cat) => {
  //     return acc += Number(cat.length);
  //   });
  //   return totalOfAll;
  // }

  let total = totalOfAllStories(allCats);
  console.log("total", total); // should be around 600

  let averageStoryLength  = function (total) {
    let numCats = allCats.length;
    let avg = Math.floor(total/numCats);
    return avg;
  }

  let average = averageStoryLength(total);
  console.log("average", average); // should be around 6

}





