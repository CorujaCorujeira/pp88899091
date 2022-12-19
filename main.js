
var canvas = new fabric.Canvas('myCanvas');

ballY=0;
ballX=0;
holeY=400;
holeX=800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf=h.png", function(Img) {
		holeObj=Img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeight(50);
		holeObj.set({
			top:holeyY,
			left:holeX
		});
		canvas.add(holeObj);
	 	});
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("bal.png", function(Img) {
		ballObj = Img;
		ballObj,scaleToWidth(50);
		ballObj,scaleToHeight(50);
		ballObj.set({
			top:ballY,
			left:ballX
		});
		canvas.add(ballObj);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (ballX==holeX)&&(ballY==holeY) {
		canvas.remove(ballObj);
	}
	além de tornar a borda do canvas vermelha 'red'. */
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	document.getElementById("hd3").innerHTML="você atingiu o objetivo!";
	document.getElementById("myCanvas").style.borderColor="red";

	function up()
	{
		// Escreva o código para mover a bola para cima.
	}

	function down()
	{
		if(ballY <=450)
		{
			ballY = ballY + blockImageHeight;
			console.log("Altura da imagem do bloco = " + blockImageHeight);
			console.log("Quando a tecla direcional baixo é pressionada, X" + ballX +" , Y ="+ballY)
			newImage();
		}
	}

	function left()
	{
		if(ballX >5)
		{
			// Escreva o código para mover a bola para a esquerda.
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballY = ballY + blockImageHeight;
			console.log("Altura da imagem do bloco = " + blockImageHeight);
			console.log("Quando a tecla direcional baixo é pressionada, X" + ballX +" , Y ="+ballY)
			newImage();
		}
	}
	


