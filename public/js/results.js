let myCatData = $('#cat-data').val().split(',');
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


  let allCatData = data[0].all_cat_array;

  // console.log("all cat data", allCatData);
  // console.log("my cat data", myCatData);

  let averagedStoryLength = averageStoryLength(allCatData);
  let sortedByStoryLength = sortByLength(allCatData);
  let sortedByNumberOfTwosAndFours = sortByNumberOfTwosAndFours(allCatData);
  let sortedByLastOccurance = sortByLastOccurance(allCatData);

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
      if (i[i.length-2]==6) {
        return 0;
      } else {
        return 1;
      }
    });
    return numB - numA;
  });
  return newArrayOfArrays;
}


function createCharts (data) {
  // myCatCaution, cautionData, myCatAggression, agressionData, myCatAdventerousness, adventerousnessData
  let colors = [
    "#F18662","#E88D52","#DA9646","#C89E3F","#B5A53F","#9FAC46","#89B153","#72B565","#59B879","#40B98E","#28BAA3","#20B9B6","#35B6C7","#55B2D3","#76ADDA","#96A6DB","#B49ED6","#CE95CC","#E38DBE","#F387AC"
  ];

  // let myCatCaution = $('.result1');
  // myCatCaution.text(data.myCatCaution);
  let block1 = $('.color-block1');
  block1.css('background-color', colors[data.myCatCaution]);
  let Chart1 = d3.select('.chart1').append('div');
  let chart1Data = data.cautionData;
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

  // let myCatAggression = $('.result2');
  // myCatAggression.text(data.myCatAggression);
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

  let findColor = function (d) {
    if (d == 7) {
        return colors[colors.length-10];
      } else {
      return colors[0];
      }
  };
  // let myCatAdventurousness = $('.result3');
  // myCatAdventurousness.text(data.myCatAdventurousness);
  let block3 = $('.color-block3');
  block3.css('background-color', findColor(data.myCatAdventurousness));
  let Chart3 = d3.select('.chart3').append('div');
  let chart3Data = data.adventurousnessData;


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





