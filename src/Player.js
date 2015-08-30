import {Vector} from '../src/Vector.js';

    export function Player (start) {
            var speed = new Vector(0, 0);
            var Player = this;
            this.WIDTH = 20;
            this.HEIGHT = 20;

            this.x = start.x;
            this.y = start.y;

            this.applyVelocity = function (v) {
                return new Vector(speed.x + v.x + Player.x, speed.y + v.y + Player.y);
            };
        }
