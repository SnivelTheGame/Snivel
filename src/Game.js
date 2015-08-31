import Levels from '../src/Levels.js';
import Player from '../src/Player.js';
import Vector from '../src/Coordinate.js';

export default function () {
    var timeLog = 0,
        ctx,
        level,
        player,
        G = new Coordinate(0.01, 1);
    this.start = function () {
        requestAnimationFrame(draw);

        var field = document.getElementById("field");
        field.width = 640;
        field.height = 480;
        ctx = field.getContext('2d');

        level = new Levels(1);
        player = new Player(level.start);

        field.addEventListener('click', onClick);
    };

    function draw (timestamp) {
        //fpsLog(timestamp);

        clear();
        processChanges();
        drawLevel();
        drawPlayer();

        requestAnimationFrame(draw);
    }

    function onClick (e) {
        console.log(e);
    }

    function fpsLog (timestamp) {
        console.log(1000 / (timestamp - timeLog));
        timeLog = timestamp;
    }

    function clear () {
        ctx.fillStyle="#000000";
        ctx.fillRect(0, 0, 640, 480);
        ctx.fillStyle="#FFFFFF";
        ctx.fillRect(2, 2, 636, 476);
    }

    function drawLevel () {
        level.lines.forEach(function(line) {
            ctx.beginPath();
            ctx.moveTo(line[0][0], line[0][1]);
            line.forEach(function(point) {
                ctx.lineTo(point[0], point[1]);
            });
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    }

    function drawPlayer () {
        ctx.fillStyle="#ff6655";
        ctx.fillRect(player.x, player.y, player.WIDTH, player.HEIGHT);
    }

    function processChanges () {
        var destination = player.applyVelocity(G),
            collision = false;
        level.lines.some(function(line) {
            var i,
                finish = line.length - 1,
                start,
                end,
                n1,
                m1,
                n2 = (player.y - destination.y)/(player.x - destination.x),
                m2 = player.y - player.x * n2,
                x,
                y;
            for (i in line) {
                start = line[i];
                if (i != finish) {
                    end = line[+i + 1];
                } else {
                    end = line[0];
                }

                n1 = (start[1] - end[1])/(start[0] - end[0]);
                m1 = start[1] - start[0] * n1;

                x = (m2-m1)/(n1-n2);
                y = x * n1 + m1;

                if (destination.x != player.x) {
                    collision = Math.max(destination.x, player.x, x) != x && Math.min(destination.x, player.x, x) != x;
                } else {
                    collision = Math.max(destination.y, player.y, y) != y && Math.min(destination.y, player.y, y) != y;
                }

                if (!collision) {
                    player.x = destination.x;
                    player.y = destination.y;
                } else {
                    console.log(1);
                }
            }
        });


    }
}