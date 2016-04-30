// start slingin' some d3 here.

//grabbing the board
var bodySelection = d3.select('.board');
//our svg
var svgSelection = bodySelection
  .append('svg')
  .attr('width', 800)
  .attr('height', 800)
  .style('background-color', 'lightgrey');



//enemy shape
// var circle = svgSelection.append('circle')
// .attr('cx', 20)
// .attr('cy', 20)
// .attr('r', 10);

// var circle = '<svg><circle cx="50" cy="50" r="20"></circle></svg>';

// //helper function to create multiple enemies
// var createEnemies = function(num, enemy) {
//   var arr = []; //array to hold our enemy elements
//   for (var i = 0; i < num; i++) {
//     arr.push(enemy);
//   }
//   return arr;
// }; 


// var createEnemies = function(num) {
//   var arr = []; //array to hold our enemy elements
//   for (var i = 0; i < num; i++) {
//     arr.push(Math.ceil(Math.random() * 1000));
//   }
//   return arr;
// }; 

// var circle = svgSelection.selectAll()
// .data(createEnemies(10))
// .enter()
// .append('circle')
// .attr('cx', function(d) {
//   return d;
// })
// .attr('cy', function(d) {
//   return d;
// })
// .attr('r', 10)
// .style('fill', 'black');

var createEnemies = function(num) {
  var arr = []; //array to hold our enemy elements
  for (var i = 1; i < num; i++) {
    arr.push(i);
  }
  return arr;
}; 

var circle = svgSelection.selectAll()
.data(createEnemies(15))
.enter()
.append('circle')
.attr('cx', function(d) {
  return Math.ceil(Math.random() * 45 * d);
})

.attr('cy', function(d) {
  return Math.ceil(Math.random() * 45 * d);
})
.attr('r', 10)
.style('fill', 'black')
.transition()
.duration(750)
.style('color', 'red');


setInterval(function() {
  update(d3.shuffle(createEnemies(10))
      .slice(0, Math.floor(Math.random() * 15)));
}, 1500);





