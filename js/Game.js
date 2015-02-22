define('Game',
    [],
    function () {
        return function () {
            var timeLog = 0,
                ctx;
            this.start = function () {
                requestAnimationFrame(draw);

                var field = document.getElementById("field");
                field.width = 640;
                field.height = 480;
                ctx = field.getContext('2d');

                field.addEventListener('click', onClick);
            };

            function draw (timestamp) {
                fpsLog(timestamp);

                clear();

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
        };
    }
);
