let myCatData = $('#cat-data').val().split(',');
let dataContainer = {
  myCatPlayfulness: myCatData.length,
  playfulnessData: [],
  myCatAggression: count2sAnd4s(myCatData),
  aggressionData: [],
  myCatCuriosity: myCatData[myCatData.length-1],
  curiosityData: []
};

$.get('/results/results', function(data) {

  let allCatData = data[0].all_cat_array;

  console.log("all cat data", allCatData);
  console.log("my cat data", myCatData);

  let averagedStoryLength = averageStoryLength(allCatData);
  let sortedByStoryLength = sortByLength(allCatData);
  let sortedByNumberOfTwosAndFours = sortByNumberOfTwosAndFours(allCatData);
  let sortedByLastIndex = sortByLastIndex(allCatData);

  dataContainer.playfulnessData = sortedByStoryLength.map(arr => {
    return arr.length;
  });

  dataContainer.aggressionData = sortedByNumberOfTwosAndFours.map(arr => {
    return count2sAnd4s(arr);
  });

  dataContainer.curiosityData = sortedByLastIndex.map(arr => {
    return Number(arr[arr.length-1]);
  });

  normalizeData(dataContainer);

  createCharts(dataContainer);

});

//////////////////////////////////////////////////////////

function normalizeData(data) {
  // takes data arr of x length, return data arr of 100 length

  for(var prop in data) { 
    if (typeof(data.prop) === "Array") {
      let arr = data.prop;
      console.log(arr.length, prop);
    }
  }
  
}

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

function sortByLastIndex(arrays) {
  let newArrayOfArrays = arrays.slice();
  newArrayOfArrays.sort( (a,b) => {
    return a[a.length-1] - b[b.length-1];
  });
  return newArrayOfArrays;
}


function createCharts (data) {

  let colors = [
    "#F18662","#E88D52","#DA9646","#C89E3F","#B5A53F","#9FAC46","#89B153","#72B565","#59B879","#40B98E","#28BAA3","#20B9B6","#35B6C7","#55B2D3","#76ADDA","#96A6DB","#B49ED6","#CE95CC","#E38DBE","#F387AC"
  ];

  ///////////////////////////////////////////
  // playfulness

  let block1 = $('.color-block1');
  block1.css('background-color', colors[data.myCatPlayfulness]);
  let Chart1 = d3.select('.chart1').append('div');
  let chart1Data = data.playfulnessData;
  console.log(chart1Data.length, 'length');
  let calculateItemWidth = function () {
    let data = chart1Data;
    let str = '';
    let width = 100/data.length;
    return str + width+'%';
  };

  Chart1.selectAll('div')
    .data(chart1Data)
    .enter().append('div')
    .style('display', 'inline-block')
    .style('width', calculateItemWidth())
    .style('height', '1em')
    .style('background-color', function (d) {
      let color = d;
      if (color > colors.length-1) {
        return colors[colors.length-1];
      } else {
      return colors[d];
      }
    });


///////////////////////////////////////////
// aggression

  let block2 = $('.color-block2');
  block2.css('background-color', colors[(data.myCatAggression*2)]);
  let Chart2 = d3.select('.chart2').append('div');
  let chart2Data = data.aggressionData;


  Chart2.selectAll('div')
    .data(chart2Data)
    .enter().append('div')
    .style('display', 'inline-block')
    .style('width', calculateItemWidth())
    .style('height', '1em')
    .style('background-color', function (d) {
      let color = d*2;
      if (color > colors.length-1) {
        return colors[colors.length-1];
      } else {
      return colors[d*2];
      }
  });

  
  ///////////////////////////////////////////
  // curiosity killed the cat
  
  let findColor = function (d) {
    if (d == 7) {
      return colors[colors.length-10];
    } else {
      return colors[0];
    }
  };

  ///////////////////////////////////////////

  let block3 = $('.color-block3');
  block3.css('background-color', findColor(data.myCatCuriosity));
  let Chart3 = d3.select('.chart3').append('div');
  let chart3Data = data.curiosityData;


  Chart3.selectAll('div')
    .data(chart3Data)
    .enter().append('div')
    .style('display', 'inline-block')
    .style('width', calculateItemWidth())
    .style('height', '1em')
    .style('background-color', function(d) {
      return findColor(d);
    });

}





