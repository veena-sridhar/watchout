// start slingin' some d3 here.

//grabbing the board
var bodySelection = d3.select('.board');
//our svg
var svgSelection = bodySelection
  .append('svg')
  .attr('width', 600)
  .attr('height', 600)
  .style('background-color', 'lightgrey');

var player = svgSelection
.append('circle')
.attr('cx', 150)
.attr('cy', 150)
.attr('r', 10)
.style('fill', 'red');


var createEnemies = function(num) {
  var arr = []; //array to hold our enemy elements
  for (var i = 1; i < num; i++) {
    arr.push(10);
  }
  return arr;
}; 

var circle = svgSelection.selectAll()
.data(createEnemies(15))
.enter()
.append('circle')
.attr('cx', function(d) {
  return Math.ceil(Math.random() * 60);
})

.attr('cy', function(d) {
  return Math.ceil(Math.random() * 80);
})
.attr('r', 10)
.style('fill', 'black')



setInterval(function() {d3.selectAll('circle')
    .transition()
    .duration(750)
    .attr('cx', function(d) {
      return Math.ceil(Math.random() * 45 * d);
    })

    .attr('cy', function(d) {
      return Math.ceil(Math.random() * 45 * d);
    })

  }, 1000);





