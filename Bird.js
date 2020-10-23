const Bird = function(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.velY = 0;
    this.width = 20;
    this.height = 24;
    this.sprite = document.getElementById('sprite');
    let self = this;
    window.document.addEventListener('keyup', function(e) {
        console.log(this);
        if (e.keycode = 32) {
            self.velY = -1.9;
        }
    });
};

Bird.prototype.update = function() {
    this.y +=this.velY;
    this.velY += 0.2;
}

Bird.prototype.render = function() {
    let renderX = this.x - this.width/2;
    let renderY = this.y - this.height/2;
    this.ctx.drawImage(this.sprite, renderX, renderY);
}