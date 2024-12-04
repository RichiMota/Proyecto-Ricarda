canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.



background_image = "mar.jpg";

tiburon_image = "tiburon.png";

tiburon_x = 10;
tiburon_y = 10;

function add(){
    background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src=background_image;

    tiburon_imgTag= new Image();
    tiburon_imgTag.onload = uploadtiburon;
    tiburon_imgTag.src=tiburon_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadtiburon(){
    ctx.drawImage(tiburon_imgTag, tiburon_x, tiburon_y, 100, 90)
}

		function my_keydown(e)
		{
			keyPressed = e.keyCode;
			console.log(keyPressed);
				if(keyPressed=="38")
				{
					up();
				}
				if(keyPressed=="40")
				{
					down();
				}
				if(keyPressed=="37")
				{
					left();
				}
				if(keyPressed=="39")
				{
					right();
				}
		}		
	

	window.addEventListener("keydown", my_keydown)

	function up()
	{
		if(tiburon_y >=0)
		{
			tiburon_y = tiburon_y - 10;
				uploadBackground();
				uploadtiburon();
		}
	}
	function down()
	{
		if(tiburon_y <=500)
			{
				tiburon_y = tiburon_y + 10;
					uploadBackground();
					uploadtiburon();
			}
	}
	function right()
	{
		if(tiburon_x <= 500)
			{
				tiburon_x = tiburon_x + 10;
					uploadBackground();
					uploadtiburon();
			}
	}
	function left()
	{
		if(tiburon_x >= 0)
			{
				tiburon_x = tiburon_x - 10;
					uploadBackground();
					uploadtiburon();
			}
	}