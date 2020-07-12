var num = 6;
var colors = generateColors(num);;

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#messageDisplay");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard= document.querySelector("#hard");
var reset = document.querySelector("#reset");

easy.addEventListener("click",function()
{
	
	messageDisplay.textContent = "";
	num = 3;
	hard.classList.remove("selected");
	easy.classList.add("selected");
	 colors = generateColors(num);
     pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
{
	// alert(colors[0]);
	if(colors[i])
	{
		squares[i].style.backgroundColor = colors[i] ; 
	}
	else
	{
		squares[i].style.display = "none";
	}
}
h1.style.background = "steelblue";
});

hard.addEventListener("click",function()
{

	messageDisplay.textContent = "";
	num = 6;
	easy.classList.remove("selected");
	hard.classList.add("selected");
	 colors = generateColors(num);
     pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
{
	// alert(colors[0]);
	
		squares[i].style.backgroundColor = colors[i] ; 
	
		squares[i].style.display = "block";
	
}
h1.style.background = "steelblue";

});

reset.addEventListener("click",function()
{
	reset.textContent = "New Colors";
	messageDisplay.textContent = "";
	 colors = generateColors(num);
     pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
{
	// alert(colors[0]);
	squares[i].style.backgroundColor = colors[i] ; 
}
h1.style.background = "steelblue";

});


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i] ; 

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor,pickedColor);
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			reset.textContent = "Play again?";
		}
		else
		{
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again";
			
		}
	});
} 

function changeColors(color)
{
	for(var i = 0;i < squares.length ; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length );
	return colors[random]; 
}

function generateColors(x)
{
	var arr = [];
	for(var i =0 ; i < x ; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return("rgb(" + r + ", " + g + ", " + b + ")");
}