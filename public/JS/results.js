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
  performAnalysis(allCatData,myCatData);
});

// now i can program!!

// finally!!
function performAnalysis(allCats,myCat) {

  let totalOfAllStories = function (allCats) {
    // high order later
    let acc = 0;
    allCats.forEach( cat => {
      acc += cat.length;
    });
    return acc;
  }

  let total = totalOfAllStories(allCats);
  console.log("total", total); // should be around 800

  let averageStoryLength  = function (total) {
    let numCats = allCats.length;
    let avg = Math.floor(total/numCats);
    return avg;
  }

  let average = averageStoryLength(total);
  console.log("average", average); // should be around 7

}



