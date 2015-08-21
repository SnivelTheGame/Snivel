define('Player', function () {
    return function (start) {
        this.WIDTH = 20;
        this.HEIGHT = 20;

        this.x = start.x;
        this.y = start.y;
    }
});