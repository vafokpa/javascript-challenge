// from data.js
var tableData = data;

// Getting a reference to the table body
var tbody = d3.select("tbody")

// Console.log the data from the data.js
console.log(tableData)

// Using 'Object.entries' to console.log each sighting report value
tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key,value]) {
        console.log(key,value);

        // Appending a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// Selecting the button 

var button = d3.select("#filter-btn");

button.on("click", () => {

    // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredData);

  // Now we need to remove the table contents
  tbody.html("");

  // Show the filtered data
  filteredData.forEach(function(isaw) {
      var row = tbody.append("tr");
      Object.entries(isaw).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
      });
  });

});
  


