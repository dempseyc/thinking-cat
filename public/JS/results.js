let allCatData;
let myCatData = $('#cat-data').val().split(',');

let averagedStoryLength;
let sortedByStoryLength;
let sortedByNumberOfTwosAndFours;
let sortedByLastOccurance;

let dataContainer = {
  myCatCaution: myCatData.length,
  cautionData: [],
  myCatAggression: count2sAnd4s(myCatData),
  aggressionData: [],
  myCatAdventurousness: myCatData[myCatData.length-1],
  adventurousnessData: []
};

// works
// what is a more environment-specific url?
d3.json('http://localhost:3000/results/results', function(data) {

  allCatData = data[0].all_cat_array;

  // console.log("all cat data", allCatData);
  // console.log("my cat data", myCatData);

  averagedStoryLength = averageStoryLength(allCatData);
  sortedByStoryLength = sortByLength(allCatData);
  sortedByNumberOfTwosAndFours = sortByNumberOfTwosAndFours(allCatData);
  sortedByLastOccurance = sortByLastOccurance(allCatData);

  dataContainer.cautionData = sortedByStoryLength.map(arr => {
    return arr.length;
  });

  dataContainer.aggressionData = sortedByNumberOfTwosAndFours.map(arr => {
    return count2sAnd4s(arr);
  });

  dataContainer.adventurousnessData = sortedByLastOccurance.map(arr => {
    return Number(arr[arr.length-1]);
  });

  createCharts(dataContainer);

});


function averageStoryLength(allCats,myCat) {

  let totalOfAllStories = function (allCats) {
    let acc = 0;
    allCats.forEach( cat => {
      acc += cat.length;
    });
    return acc;
  }

  let total = totalOfAllStories(allCats);

  let averageStoryLength  = function (total) {
    let numCats = allCats.length;
    let avg = Math.floor(total/numCats);
    return avg;
  }

  return averageStoryLength(total);

}

function sortByLength(arrays) {
  let newArrayOfArrays = arrays.slice();
  newArrayOfArrays.sort( (a,b) => {
    return a.length - b.length;
  });
  return newArrayOfArrays;
}

function count2sAnd4s(arr) {
  let count = arr.reduce( (acc,i) => {
    if (i==2 || i==4) {
      return acc - 0 + 1;
    } else {
      return acc - 0;
    }
  });
  return Number(count);
}

function sortByNumberOfTwosAndFours(arrays) {
  let newArrayOfArrays = arrays.slice();
  newArrayOfArrays.sort( (a,b) => {
    let numA = count2sAnd4s(a);
    let numB = count2sAnd4s(b);
    return numA - numB;
  });
  return newArrayOfArrays;
}

function sortByLastOccurance(arrays) {
  let newArrayOfArrays = arrays.slice();
  newArrayOfArrays.sort( (a,b) => {
    let numA = a.reduce( (acc,i) => {
      if (i[i.length-1]==6) {
        return 2;
      } else {
        return 0;
      }
    });
    let numB = b.reduce( (acc,i) => {
      if (i[i.length-1]==7) {
        return 1;
      } else {
        return 0;
      }
    });
    return numA - numB;
  });
  return newArrayOfArrays;
}

// let's do some d3 bullshit

// console.log(dataContainer);

// #charts

function createCharts (data) {
  // myCatCaution, cautionData, myCatAggression, agressionData, myCatAdventerousness, adventerousnessData

  console.log('create charts', data);
}







