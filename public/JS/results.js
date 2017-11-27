const d3 = require('d3');

if (d3) {
  console.log("d3 exists");
} else {
  console.log("no d3 existing");
}

// d3.json('http://localhost/RestService/GetTransactionByStatus/' + id, function(data) {
//     console.log(data.transactionConcil);
// });
