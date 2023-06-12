// Game constants
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 20; // Size of each grid cell
const gridWidth = canvas.width / gridSize;
const gridHeight = canvas.height / gridSize;

// Game state
let gameBoard = createGameBoard();

// Function to create the initial game board
function createGameBoard() {
    // Initialize an empty grid
    const grid = [];
    for (let i = 0; i < gridWidth; i++) {
        const row = [];
        for (let j = 0; j < gridHeight; j++) {
            row.push(0); // 0 represents an empty cell
        }
        grid.push(row);
    }

    // Set walls on the grid

    // TODO: Set walls at specific grid positions

    return grid;
}

// Function to render the game board
function renderGameBoard() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Render each cell on the grid
    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            const cellValue = gameBoard[i][j];

            // TODO: Render different types of cells (walls, pellets, Pac-Man, ghosts)
        }
    }
}

// Function to handle player input
function handleInput(event) {
    // TODO: Update Pac-Man's position based on arrow key input
}

// Function to update the game state
function updateGameState() {
    // TODO: Update the game state (e.g., Pac-Man movement, pellet collection, ghost behavior)
}

// Game loop
function gameLoop() {
    updateGameState();
    renderGameBoard();
    requestAnimationFrame(gameLoop);
}

// Event listener for player input
document.addEventListener("keydown", handleInput);

// Start the game loop
gameLoop();
