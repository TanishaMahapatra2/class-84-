canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var rover_height=100;
var rover_width=100;
var rover_x=20;
var rover_y=20;
var rover_image="rover.png";
var background_image="mars.jpg";
 
function bodyonload()
{
    console.log("i am inside")
var bg_image=new Image();
bg_image.onload=uploadBackground;
bg_image.src=background_image;

var r_image=new Image();
r_image.src=rover_image;
r_image.onload=upload_rover;
}

function uploadBackground()
{
    console.log("i am outside");
    ctx.drawImage(bg_image,0,0,canvas.width,canvas,height);
    }

    function upload_rover()
    {
        ctx.drawImage(r_image,rover_x,rover_y,rover_width,rover_height);
            }