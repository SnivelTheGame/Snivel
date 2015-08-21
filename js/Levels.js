define('Levels', function () {
    var levels = {
        '1': {
            start: {x: 10, y: 178},
            lines: [
            [
                [0, 200],
                [400, 200],
                [600, 100],
                [700, 100]
            ]
            ]
    }
    };
    return function (levelName) {
        this.lines = levels[levelName].lines;
        this.start = levels[levelName].start;
    }
});