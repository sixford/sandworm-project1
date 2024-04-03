// high-level pseudo code 

// Initiate game and grid via start button and load food and sandworm onto grid, random placement
// move sandworm via eventlistener 'w' 'a' 's' 'd' or arrows
// If sandworm cell = food cell, add another cell to snake
// When food is "eaten" and snake cell added, increase speed
// if sandworm cell = sandworm cell, initiate game over
// if game over, reveal game over screen
// When restart button clicked, reset game


// Elements

const grid = document.querySelector('#grid')
const startButton = document.querySelector('#start')
const restartButton = document.querySelector('#restart')
const scoreDisplay = document.querySelector('p.score')

const cols = 20
const rows = 20
const cellCount = cols * rows
const startingPos = 0

const cells = []

// add water + snake in starting cell

function startGame() {

  for (let idx = 0; idx < cellCount; idx++) {

    // Generate element
    const cell = document.createElement('div')
    cell.innerText = idx
    cell.dataset.index = idx
    cell.classList.add('grid-cell')

    // Place the character in the starting cell
    if (idx === startingPos) {
      cell.classList.add('water')
    }

    // Set height and width of cell
    cell.style.width = `${100 / cols}%`
    cell.style.height = `${100 / rows}%`

    // Add cell to the UI
    grid.append(cell)

    // Add the cell to the cells array
    cells.push(cell)
  }
}

startGame()

let currentPos = 0




// Variable 

// - score
let score = 0
// - current position of sandworm - Made random cell
let sandwormPosition = 0
// - intervalspeed
let intervalSpeed = 1000

let waterPosition


// On Page Load

// Grid elements


// Create grid



// Execution/Functions

// - game (main function) : called when start button is clicked. 


// - Random position for water cell

function generateWaterPosition() {
  return Math.floor(Math.random() * cellCount)

}


// - check for collision with water cell

// - check for collision with sandworm cell

// - if collision with water cell, add to sandworm cell 

// - if sandworm cell added, increase speed/interval

// - If collision with sandworm cell, game over

// - Add to score if colliison with water cell

// - reset variables; score to 0 

// - Function: if sandworm cell moves right off grid, reset on same row.

// - Bring z-index (game over grid) to front



// Events

// - Initialise game when start clicked

// - Handle user input; moving sandworm

// - When restart button clicked, reset grid


