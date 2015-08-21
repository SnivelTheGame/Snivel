define('Player',
    ['Vector'],
    function (Vector) {
        return function (start) {
            var speed = new Vector(0, 0);
            var Player = this;
            this.WIDTH = 20;
            this.HEIGHT = 20;

            this.x = start.x;
            this.y = start.y;

            this.applyVelocity = function (v) {
                speed.add(v);
                Player.x += speed.x;
                Player.y += speed.y;
            };
        }
    }
);