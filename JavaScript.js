var playerImage;

function load()
{
	//Allocate a new image and assign it to previous variable
	playerImage = new Image();
	//Set the src.
	playerImage.src = "kanye.jpg";
}
function main()
{
	//Retrieving canvas
	var canvas = document.getElementById("canvas");
	//Setting canvas size
	canvas.width = 640;
	canvas.height = 480;
	load();
	//Creates a 2D drawing
	var ctx = canvas.getContext('2d');
	//Calls the draw function
	draw(ctx);
	}
var x = 10;
var y = 10;
function draw(ctx)
{
	//Set clear colour to gray and fetch width and height from canvas
	ctx.fillStyle = 'gray';
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	//Set future fill colour to red
	ctx.drawImage(playerImage, x, y);
	//Ask the browser to call this function again as soon as it can
	window.requestAnimationFrame(function(){draw(ctx);});
	}
function keydown(event)
{
	if(event.key == "ArrowLeft")
	{
		x = x - 5;
	}
	else if(event.key == "ArrowRight")
	{
		x = x + 5;
	}
	else if(event.key == "ArrowUp")
	{
		y = y - 5;
	}
	else if(event.key == "ArrowDown")
	{
		y = y + 5;
	}
}
				
window.onload = main;
window.addEventListener("keydown", keydown);