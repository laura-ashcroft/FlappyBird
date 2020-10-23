window.onload = function() {
    const c = document.getElementById("canvas");
    c.width = 706;
    c.height = 530;

    const ctx = c.getContext("2d");
    
    const environment = new Environment(c, ctx);
    const bird = new Bird(50, 250, ctx);
    //const pipe1 = new Pipe (280, 350,  250, 2, ctx)
    const pipes = [];

    setInterval(function() {
        let pipeSet = generateRandomPipes(ctx, c.width, c.height);
        pipes.push(pipeSet.top, pipeSet.bottom);
    }, 3000);


    ctx.fillStyle = "#FFFFFF";
    gameLoop();


    function gameLoop() {
     ctx.fillRect(0,0, c.width, c.height);
     environment.update();
     environment.render();
     pipes.forEach(function(pipe1){
        pipe1.update();
        pipe1.render(); 
     });
     bird.update();
     bird.render();
     window.requestAnimationFrame(gameLoop);
   }
 };

function generateRandomPipes(ctx, canvasWidth, canvasHeight) {
    let lengthTop = Math.round(Math.random()*200+100);
    let lengthBottom = 530 - 100 - lengthTop;
    let returnVal = { };
    returnVal.top = new Pipe(0, 706, lengthTop, 3, ctx);
    returnVal.bottom = new Pipe(530+5-lengthTop, 706, lengthBottom, 3, ctx);
    return returnVal;
}