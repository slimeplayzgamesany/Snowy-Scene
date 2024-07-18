const canvas = document.getElementById("canvas1"); //canvas is a place where we can draw stuff.
const ctx=canvas1.getContext("2d"); //ctx is a tool to draw
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;




//! Circle


// box.fillStyle="green";
// box.strokeStyle="white";
// box.beginPath();
// box.arc(0,100,5,0,Math.PI*2);
// box.fill();
// box.stroke();


// window.addEventListener("click",(events)=>{
//     console.dir(events);
//     console.log(events.clientX,events.clientY);
//     box.fillStyle="orange";
//     box.strokeStyle="red";
//     box.beginPath();
//     box.arc(events.clientX,events.clientY,5,0,Math.PI*2);
//     box.fill();
//     box.stroke();
// })
let particleArray=[];
class Particle{
    constructor(){
        this.x=Math.random()*window.innerWidth*0.98;
        this.y=Math.random()*window.innerHeight*0.98;
        this.size=Math.random()*10+0.5;
        this.speedX=Math.random()*5-2;
        this.speedY=Math.random()*5+2;
        this.color=`rgba(${Math.random()*256+240},${Math.random()*256+240},${Math.random()*256+240},${Math.random()+0.25})`

    }
    draw(){
        ctx.fillStyle=this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
    update(){
       if(this.y>=(window.innerHeight+5)){
         this.y=-10;
         this.x+=this.speedX;

       }
       else{
        this.y+=this.speedY;
        this.x+=this.speedX;
       }

    }
    }


function init(){
    for(let i=0;i<=1000;i++){
        particleArray.push(new Particle());
    }
}
init()
console.log(particleArray);
console.log(particleArray.update);

//! Drawing Function
function particleDraw(){
    for(let i=0;i<particleArray.length;i++){
        particleArray[i].update();
        particleArray[i].draw();

    }
}




function animate(){
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    particleDraw();

    requestAnimationFrame(animate);

};
animate();


