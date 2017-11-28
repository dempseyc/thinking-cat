let allCatData;
let myCatData;

// works
d3.json('http://localhost:3000/results/results', function(data) {
  // console.log(data);
  allCatData = data[0].all_cat_array;
  myCatData = $('#cat-data').val();
  console.log("all cat data", allCatData, "my cat data", myCatData);
});




