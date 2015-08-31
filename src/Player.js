import Coordinate from '../src/Coordinate.js';

export default function (start) {
    var speed = new Coordinate(0, 0);
    var Player = this;
    this.WIDTH = 20;
    this.HEIGHT = 20;

    this.x = start.x;
    this.y = start.y;

    this.applyVelocity = function (v) {
        return new Coordinate(speed.x + v.x + Player.x, speed.y + v.y + Player.y);
    };
}
