export default function (x, y) {
    var Coordinate = this;
    this.x = x;
    this.y = y;
    this.add = function (v) {
        Coordinate.x += v.x;
        Coordinate.y += v.y;
    };
}
