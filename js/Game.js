define('Game',
    ['Levels', 'Player'],
    function (Levels, Player) {
        return function () {
            var timeLog = 0,
                ctx,
                level,
                player;
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
        };
    }
);
