
var mouse = {x: 500, y: 500}
//score DOM elements
var highScoreElement = document.getElementById('high');
var currentScoreElement = document.getElementById('current');
var collisionElement = document.getElementById('collisions');

//score settings
var currentScore = 0;
var collisionScore = 0;

//collision function
// var collide = function(node) {
//     var r = 10,
//         nx1 = node.x - r,
//         nx2 = node.x + r,
//         ny1 = node.y - r,
//         ny2 = node.y + r;

//     return function(quad, x1, y1, x2, y2) {
//         if (quad.point && (quad.point !== node)) {
//             var x = node.x - quad.point.x,
//                 y = node.y - quad.point.y,
//                 l = Math.sqrt(x * x + y * y),
//                 r = 10 + quad.point.radius;
//             if (l < r) {
//                 l = (l - r) / l * .5;
//                 node.x -= x *= l;
//                 node.y -= y *= l;
//                 quad.point.x += x;
//                 quad.point.y += y;
//             }
//         }
//         return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
//      };
// }



//score keeper function
// var scoreKeeper = function () {

// 	var scoreArray = []
// 	//if the player touches the enemy node
// 	if (collide('player')) {
// 		console.log('collided!');
// 		scoreArray.push(currentScore);
// 		currentScore = 0;
// 		collisionElement.innerHTML = collisionScore++;
// 	} else {
// 		setInterval(function(){currentScoreElement.innerHTML = currentScore++}, 500);
// 		highScoreElement.innerHTML = Math.max.apply(null, scoreArray);		
// 	}

// }
// scoreKeeper();

//grabbing the board
var bodySelection = d3.select('.board');
//our svg
var svgSelection = bodySelection
  .append('svg')
  .attr('width', 600)
  .attr('height', 600)
  .style('background-color', 'lightgrey');

var drag = d3.behavior.drag()
  .on('drag', function() {
    var loc = d3.mouse(this);
    mouse = {x: loc[0], y: loc[1]};
    d3.select(this).attr('cx', mouse.x).attr('cy', mouse.y);
  })

var player = svgSelection.selectAll('circle.player')
	.data([1])
	.enter()
	.append('circle')
	.attr('class', 'player')
	.attr('cx', '150')
	.attr('cy', '150')
	.attr('r', '10')
	.style('fill', 'red').call(drag);



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
	.attr('class', 'enemy')
	.attr('cx', function(d) {
	  return Math.ceil(Math.random() * 60);
})

	.attr('cy', function(d) {
  return Math.ceil(Math.random() * 80);
})
	.attr('r', 10)
	.style('fill', 'black');



setInterval(function() {d3.selectAll('circle.enemy')
    .transition()
    .duration(750)
    .attr('cx', function(d) {
      return Math.ceil(Math.random() * 55 * d);
    })

    .attr('cy', function(d) {
      return Math.ceil(Math.random() * 57 * d);
    })

  }, 1000);





