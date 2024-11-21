let grid;
let velocityGrid;
let w = 4;  // Initial particle size
let cols, rows;
let hueValue = 200;
let gravity = 0.1;
let patternMode = false;
let mirrorMode = false;
let rainbowMode = false;
let time = 0;
let canvas;

function make2DArray(cols, rows) {
    return Array(cols).fill().map(() => Array(rows).fill(0));
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.style('border-radius', '10px');
    colorMode(HSB, 360, 255, 255);
    updateDimensions();
    
    // Enhanced slider functionality
    const sliders = {
        'size': { min: 2, max: 10, initial: 4 },
        'gravity': { min: 0.01, max: 0.2, initial: 0.1 },
        'spread': { min: 1, max: 15, initial: 5 },
        'colorSpeed': { min: 0.1, max: 1, initial: 0.5 }
    };

    Object.entries(sliders).forEach(([type, config]) => {
        const slider = document.getElementById(`${type}Slider`);
        const display = document.getElementById(`${type}Value`);
        
        slider.addEventListener('input', function() {
            let value = this.value;
            if (type === 'size') {
                w = parseInt(value);
                display.textContent = w;
                updateDimensions();
            } else if (type === 'gravity') {
                gravity = map(value, 1, 20, config.min, config.max);
                display.textContent = gravity.toFixed(2);
            } else if (type === 'spread') {
                display.textContent = value;
            } else if (type === 'colorSpeed') {
                display.textContent = value;
            }
        });
    });
}

function updateDimensions() {
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(cols, rows);
    velocityGrid = make2DArray(cols, rows);
}

function togglePattern() {
    patternMode = !patternMode;
}

function toggleMirror() {
    mirrorMode = !mirrorMode;
}

function toggleRainbow() {
    rainbowMode = !rainbowMode;
}

function clearCanvas() {
    grid = make2DArray(cols, rows);
    velocityGrid = make2DArray(cols, rows);
}

function mouseDragged() {
    if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;

    let mouseCol = floor(mouseX / w);
    let mouseRow = floor(mouseY / w);
    let spread = parseInt(document.getElementById('spreadSlider').value);
    let colorSpeed = map(parseInt(document.getElementById('colorSpeedSlider').value), 1, 10, 0.1, 1);
    
    for (let i = -spread; i <= spread; i++) {
        for (let j = -spread; j <= spread; j++) {
            if (random(1) < 0.75) {
                let col = mouseCol + i;
                let row = mouseRow + j;
                
                let addParticle = (c, r) => {
                    if (c >= 0 && c < cols && r >= 0 && r < rows) {
                        let hue;
                        if (patternMode) {
                            let angle = atan2(j, i);
                            hue = ((angle + PI) / (TWO_PI) * 360 + time) % 360;
                        } else if (rainbowMode) {
                            hue = (hueValue + dist(mouseCol, mouseRow, c, r) * 10) % 360;
                        } else {
                            hue = hueValue;
                        }
                        grid[c][r] = hue;
                        velocityGrid[c][r] = 1;
                    }
                };

                addParticle(col, row);
                if (mirrorMode) {
                    addParticle(cols - col - 1, row);
                }
            }
        }
    }

    if (!patternMode) {
        hueValue = (hueValue + colorSpeed) % 360;
    }
}

function draw() {
    background(0);
    time += 0.1;

    // Optimized drawing
    noStroke();
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j] > 0) {
                fill(grid[i][j], 255, 255);
                square(i * w, j * w, w);
            }
        }
    }

    // Optimized physics
    let nextGrid = make2DArray(cols, rows);
    let nextVelocityGrid = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
        for (let j = rows - 1; j >= 0; j--) {
            if (grid[i][j] > 0) {
                let velocity = velocityGrid[i][j];
                let moved = false;
                let newRow = min(rows - 1, j + floor(velocity));

                // Try moving down
                for (let y = newRow; y > j; y--) {
                    if (y >= rows) continue;
                    
                    let dir = random(1) < 0.5 ? 1 : -1;
                    
                    if (!grid[i][y]) {
                        nextGrid[i][y] = grid[i][j];
                        nextVelocityGrid[i][y] = velocity + gravity;
                        moved = true;
                        break;
                    } else if (i + dir < cols && i + dir >= 0 && !grid[i + dir][y]) {
                        nextGrid[i + dir][y] = grid[i][j];
                        nextVelocityGrid[i + dir][y] = velocity + gravity;
                        moved = true;
                        break;
                    } else if (i - dir < cols && i - dir >= 0 && !grid[i - dir][y]) {
                        nextGrid[i - dir][y] = grid[i][j];
                        nextVelocityGrid[i - dir][y] = velocity + gravity;
                        moved = true;
                        break;
                    }
                }

                if (!moved) {
                    nextGrid[i][j] = grid[i][j];
                    nextVelocityGrid[i][j] = min(velocity + gravity, 5);
                }
            }
        }
    }

    grid = nextGrid;
    velocityGrid = nextVelocityGrid;
    
}