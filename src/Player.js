import Coordinate from '../src/Coordinate.js';

var speed = new Coordinate(0, 0);

export default class Player {
    constructor (start) {
        this.WIDTH = 20;
        this.HEIGHT = 20;

        this.x = start.x;
        this.y = start.y;
    }

    applyVelocity (v) {
        return new Coordinate(speed.x + v.x + this.x, speed.y + v.y + this.y);
    };
}
