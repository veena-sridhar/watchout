
var mouse = {x: 500, y: 500}

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
	.attr('cx', 0)
	.attr('cy', 0)
	.attr('r', 10)
	.style('fill', 'black');

setInterval(function() {
	d3.selectAll('circle.enemy')
    .transition()
    .duration(750)
    .attr('cx', function(d) {
      return Math.ceil(Math.random() * 55 * d);
    })

    .attr('cy', function(d) {
      return Math.ceil(Math.random() * 57 * d);
    })
  }, 1000);

var highScoreElement = document.getElementById('high');
var currentScoreElement = document.getElementById('current');
var collisionElement = document.getElementById('collisions');

//score settings
var currentScore = 0;
var collisionScore = 0;

var scoreKeeper = function () {
 	var playerX = d3.select('.player').attr('cx');
 	var playerY = d3.select('.player').attr('cy');
 	var enemyX = d3.select('.enemy').attr('cx');
 	var enemyY = d3.select('.enemy').attr('cy');
 	var scoreArray = [];
	if (playerX - enemyX <= 20 || enemyX - playerX <=20) {
		if (playerY - enemyY <= 20 || enemyY - playerY <=20) {
			scoreArray.push(currentScore);
			currentScore = 0;
			collisionElement.innerHTML = collisionScore++;
		}
	} else {
		setInterval(function(){currentScoreElement.innerHTML = currentScore++}, 500);
		highScoreElement.innerHTML = Math.max.apply(null, scoreArray);		
	}

 };

 setInterval(scoreKeeper, 250);





 


