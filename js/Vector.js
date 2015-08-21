define('Vector', function () {
    return function (x, y) {
        var Vector = this;
        this.x = x;
        this.y = y;
        this.add = function (v) {
            Vector.x += v.x;
            Vector.y += v.y;
        };
    };
});