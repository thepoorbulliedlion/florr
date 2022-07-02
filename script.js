var thing = document.getElementById("test");
var ctx = thing.getContext("2d");
var test2 = 1;
var length = 400;
var positionX = 1350;
var positionY = 500;
var many = 150;
var speed = 0.1;
var size = 50;
	
function draw() {
    ctx.beginPath();
    ctx.fillStyle='#0E0B16';
    ctx.rect(880,0,1830,1000);
    ctx.fill();
    ctx.closePath();  
        

    ctx.beginPath();
        ctx.fillStyle='rgba(255, 255, 255)';
	    ctx.strokeStyle = 'rgba(200,200,200)';
	    ctx.lineWidth = 15;
        ctx.ellipse(Math.cos(test2*speed+many)*length+positionX,Math.sin(test2*speed+many)*length+positionY,size,size,0,0,7);
        ctx.fill();
	    ctx.stroke();
    ctx.closePath();



    ctx.beginPath();
        ctx.fillStyle='rgba(255, 255, 255)';
        ctx.ellipse(Math.cos(test2*speed+many*2)*length+positionX,Math.sin(test2*speed+many*2)*length+positionY,size,size,0,0,7);
        ctx.fill();
	    ctx.stroke();
    ctx.closePath();
        


    ctx.beginPath();
        ctx.fillStyle='rgba(255, 255, 255)';
        ctx.ellipse(Math.cos(test2*speed+many*3)*length+positionX,Math.sin(test2*speed+many*3)*length+positionY,size,size,0,0,7);
        ctx.fill();
	    ctx.stroke();
    ctx.closePath();
        
    ctx.beginPath();
        ctx.fillStyle='rgba(255, 255, 255)';
        ctx.ellipse(Math.cos(test2*speed+many*4)*length+positionX,Math.sin(test2*speed+many*4)*length+positionY,size,size,0,0,7);
        ctx.fill();
	    ctx.stroke();
    ctx.closePath();



    ctx.beginPath();
        ctx.fillStyle='rgba(255, 255, 255)';
        ctx.ellipse(Math.cos(test2*speed+many*5)*length+positionX,Math.sin(test2*speed+many*5)*length+positionY,size,size,0,0,7);
        ctx.fill();
	    ctx.stroke();
    ctx.closePath();



    ctx.beginPath();
        ctx.fillStyle='rgba(255, 255, 255)';
        ctx.ellipse(Math.cos(test2*speed+many*6)*length+positionX,Math.sin(test2*speed+many*6)*length+positionY,size,size,0,0,7);
        ctx.fill();
	    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
        ctx.fillStyle='rgba(255, 255, 255)';
        ctx.ellipse(Math.cos(test2*speed+many*7)*length+positionX,Math.sin(test2*speed+many*7)*length+positionY,size,size,0,0,7);
        ctx.fill();
	    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
        ctx.fillStyle='rgba(255, 255, 255)';
        ctx.ellipse(Math.cos(test2*speed+many*8)*length+positionX,Math.sin(test2*speed+many*8)*length+positionY,size,size,0,0,7);
        ctx.fill();
	    ctx.stroke();
    ctx.closePath();

	    test2+=speed;
};
        
        
window.setInterval(draw,10);
