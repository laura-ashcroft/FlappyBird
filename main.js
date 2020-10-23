window.onload = function() {
    const c = document.getElementById("canvas");
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    const ctx = c.getContext("2d");
    
    const environment = new Environment(c, ctx);
    const bird = new Bird(50, 250, ctx);
    const pipe1 = new Pipe (280, 350, 250, 2, ctx)
    const pipes = [];

    setInterval(function() {
        let pipeSet = generateRandomPipes(ctx, c.width, c.height);
        pipes.push(pipeSet);
    }, 1000)

    gameLoop();


    function gameLoop() {
     ctx.fillRect(0,0, c.width, c.height);
     environment.update();
     environment.render();
     /*pipes.forEach(function(pipe1){
        pipe1.update();
        pipe1.render(); 
     });*/
      pipe1.update();
      pipe1.render();
    
     bird.update();
     bird.render();
     window.requestAnimationFrame(gameLoop);
   }
 };

/*function generateRandomPipes(ctx, canvasWidth, canvasHeight) {
    let lengthTop = Math.round(Math.random()*200+100)
    let lengthBottom = canvasHeight - 10 - lengthTop;
    let returnVal = { };
    returnVal.top = new Pipe(canvasWidth, -5, lengthTop, 3, ctx);
    returnVal.bottom = new Pipe(canvasWidth, canvasHeight+5-lengthBottom, lengthBottom, 3, ctx);
    return returnVal;
}*/


function generateRandomPipes(ctx, canvasWidth, canvasHeight) {
    const pipe1 = new Pipe (280, 350, 250, 2, ctx)
    return pipe1;
}