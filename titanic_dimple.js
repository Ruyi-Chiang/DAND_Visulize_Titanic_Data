// define survival/death rate percentage format
var formatPercent = d3.format(",.1%");


function demo_chart(d) {
      var svg = dimple.newSvg("#viz1", 800, 600);
      var filteredData = dimple.filterData(d, "Age_group", 
                ["under 18", 
                "18-24", 
                "25-34", 
                "35-44", 
                "45-54", 
                "55-64", 
                "Above 65"])
      var Chart = new dimple.chart(svg, filteredData);
      
      // x_axis part
      var x_axis = Chart.addCategoryAxis("x", "Age_group");
      x_axis.addOrderRule(["under 18", "18-24", 
            "25-34", "35-44", 
            "45-54", "55-64", 
            "Above 65"]);
      
      // y_axis part
      var y_axis = Chart.addPctAxis("y", "PassengerId");
      y_axis.overrideMax = 0.5;
      y_axis.title = "Survival rate";

      // series part
      var mySeries = Chart.addSeries(["Survived", "Sex"], 
        dimple.plot.line);
      mySeries.aggregate = dimple.aggregateMethod.count;

      var mySeries = Chart.addSeries(["Survived", "Sex"], 
        dimple.plot.bubble);
      mySeries.aggregate = dimple.aggregateMethod.count;
      

      // Customize tooltips information
      mySeries.getTooltipText = function (e) {
        // console.log(e); //Uncomment this line if need to change the tooltips
            return ["Age Group: " + e.cx,
                    "Gender: " + e.aggField[1],
                "Rate: " + formatPercent(e.cy),
                "Status: " + status_check(e.aggField[0]),
                descrip(e.aggField[0], e.yCount)
                ]}


      Chart.addLegend(200, 10, 360, 20, "right");
      Chart.draw();
      
      // Remove the death rate lines
      d3.selectAll("circle.dimple-0")
        .remove();
      d3.select("#dimple-0-male")
        .remove();
      d3.select("#dimple-0-female")
        .remove();

};

    
function pclass_chart(d) {
      var svg = dimple.newSvg("#viz2", 800, 600);
      var Chart = new dimple.chart(svg, d);
      
      // x_axis part
      var x_axis = Chart.addCategoryAxis("x", "Pclass");
      x_axis.title = "Passenger Class";
      
      // y_axis part
      var y_axis = Chart.addPctAxis("y", "PassengerId");
      y_axis.title = "Survival rate";

      // series part
      var mySeries = Chart.addSeries("Survived", dimple.plot.bar);
      mySeries.aggregate = dimple.aggregateMethod.count;
      mySeries.addOrderRule("Survived", [1,0]);

      // legend part
      var myLegend = Chart.addLegend(200, 10, 360, 20, "right");

      // Customize tooltips infomation
      mySeries.getTooltipText = function (e) {
            return ["Passenger class: " + e.cx,
                "Rate: " + formatPercent(e.cy),
                "Status: " + status_check(e.aggField[0]),
                descrip(e.aggField[0], e.yCount)
                ]}

      Chart.draw();

      // Remove the death rate part and adjust the legend label
      d3.selectAll("#viz2")
        .selectAll("rect.dimple-0")
        .remove();
      d3.select("#viz2")
        .select(".dimple-legend.dimple-0")
        .remove();
      d3.select("#viz2")
        .select(".dimple-legend.dimple-1")
        .select("text")
        .html("Survival Rate");

      // Customize bar chart color
      d3.select("#viz2")
        .select(".dimple-legend.dimple-1")
        .select("rect")
        .style("fill", "#d8b365");
      d3.select("#viz2")
        .selectAll("rect.dimple-series-0")
        .style("fill", "#d8b365");
};

    

function deckClass(d) {
      var svg = dimple.newSvg("#viz3", 800, 600);
      var filteredData = dimple.filterData(d, "Cabin_cat",
                  ["G", "F", "E", "D", "C", "B", "A"]); 

      var Chart = new dimple.chart(svg, filteredData);

      // y_axis part
      var y_axis = Chart.addCategoryAxis("y", "Cabin_cat");
      y_axis.addOrderRule(["G", "F", "E", "D", "C", "B", "A"]);
      y_axis.title = "Deck";

      // x_axis part
      var x_axis = Chart.addCategoryAxis("x", "Pclass");
      x_axis.title = "Passenger Class";

      // series part
      Chart.addMeasureAxis("p", "PassengerId");
      var pies = Chart.addSeries("Survived", dimple.plot.pie);
      pies.radius = 30;
      pies.aggregate = dimple.aggregateMethod.count;

      // legend part
      Chart.addLegend(500, 10, 60, 50, "right");

      // Customize tooltips information
      pies.getTooltipText = function (e) {
            return ["Passenger class: " + e.cx,
                "Deck Level: " + e.cy,
                "Status: " + status_check(e.aggField[0]),
                "Rate: " + formatPercent(e.piePct),
                descrip(e.aggField[0], e.angle)
                ]}

          // Draw the chart
      Chart.draw();

      // Customize fill color for my pie charts to highlight the survival numbers
      d3.select("#viz3")
        .select(".dimple-legend.dimple-1")
        .select("text")
        .html("Survived");
      d3.select("#viz3")
        .select(".dimple-legend.dimple-0")
        .select("text")
        .html("Dead");
      d3.select("#viz3")
        .selectAll(".dimple-pie.dimple-0")
        .style("fill", "#bfbfbf")
        .style("stroke", "#bfbfbf");
      d3.select("#viz3")
        .select("rect.dimple-0")
        .style("fill", "#bfbfbf")
        .style("stroke", "#bfbfbf");
      d3.select("#viz3")
        .selectAll(".dimple-pie.dimple-1")
        .style("fill", "#5ab4ac")
        .style("stroke", "#5ab4ac");
      d3.select("#viz3")
        .select("rect.dimple-1")
        .style("fill", "#5ab4ac")
        .style("stroke", "#5ab4ac");

      
      // Grouping elements at the same decks
      d3.select("#viz3")
        .selectAll("#dimple-1-1-e--")
        .classed("groupE", true);
      d3.select("#viz3")
        .selectAll("#dimple-1-2-e--")
        .classed("groupE", true);
      d3.select("#viz3")
        .selectAll("#dimple-1-3-e--")
        .classed("groupE", true);

      d3.select("#viz3")
        .selectAll("#dimple-1-1-d--")
        .classed("groupD", true);
      d3.select("#viz3")
        .selectAll("#dimple-1-2-d--")
        .classed("groupD", true);
    
      d3.select("#viz3")
        .selectAll("#dimple-1-2-f--")
        .classed("groupF", true);
      d3.select("#viz3")
        .selectAll("#dimple-1-3-f--")
        .classed("groupF", true);

      // Assign mouse over event to highlight the group comparison
      group_comparison(".groupD");
      group_comparison(".groupE");
      group_comparison(".groupF");
};

// some global function for tooltips and group_comparsion
function status_check(value){
  if (value == 1){
    return "Survived"}
  else{
    return "Dead"}
};

function descrip(status, detailNum){
  if (status == 1){
    return "Survived passengers: " + detailNum}
  else{
    return "Dead Passengers: " + detailNum}
};

function group_comparison(group_name){
  d3.selectAll(group_name)
    .on("mousemove.tooltip", 
      function() {
        d3.selectAll(group_name).style("fill", "orange");
      })
    .on("mouseout", function(d) {d3.selectAll(group_name).style("fill", "#5ab4ac");});
};