
    var levels = {
        '1': {
            start: {x: 10, y: 78},
            lines: [
            [
                [0, 200],
                [400, 201],
                [600, 101],
                [700, 100]
            ]
            ]
    }
    };
export function Levels (levelName) {
    this.lines = levels[levelName].lines;
    this.start = levels[levelName].start;
}
