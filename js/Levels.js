define('Levels', function () {
    var levels = {
        '1': [
            [[0, 200], [400,200], [600, 100], [700, 100]]
        ]
    };
    return function (levelName) {
        this.lines = levels[levelName];
    }
});