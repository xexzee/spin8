var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var Circle = function(i) {
	this.special = i;
	this.radius = 6 * (i + 1);
  this.thickness = (i + 1) / 36;
  this.increment = 0;
  
  this.rename = 540;
  
  this.draw = function() {
  	ctx.beginPath();
		ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = this.thickness;
		ctx.arc(200, 200, this.radius, 0, (Math.PI) / 2);
		ctx.stroke();
		ctx.closePath();
  }
  
  this.update = function() {
  	if (this.rename > 45) {
    	this.rename--;
    }
  	this.increment += (Math.PI / this.rename) / (i / 2);
    if (this.increment >= Math.PI * 2) {
    	this.increment = 0;
    }
  	ctx.beginPath();
		ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = this.thickness;
		ctx.arc(200, 200, this.radius, this.increment, Math.PI + this.increment);
		ctx.stroke();
		ctx.closePath();
    
    /*
    ctx.beginPath();
		ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = this.thickness;
		ctx.arc(200, 200, this.radius, 5 * Math.PI + this.increment, (3 * Math.PI / 2 + this.increment));
		ctx.stroke();
		ctx.closePath();
    */
  }
}

var circles = [];

for (i = 0; i < 48; i++) {
	circles[i] = new Circle(i);
}

for (i = 0; i < circles.length; i++) {
	circles[i].draw();
}

//setTimeout(function() {
	var timer = window.setInterval(function() {
	ctx.clearRect(0, 0, 400, 400);
  for (i = 0; i < circles.length; i++) {
  	circles[i].update();
  }
}, 20);
//}, 2000);
