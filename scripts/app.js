// high-level pseudo code 

// Initiate game and grid via start button and load water and sandworm onto grid, random placement
// move sandworm via eventlistener 'w' 'a' 's' 'd' or arrows
// If sandworm cell = water cell, add another cell to sandworm
// When water is "eaten" and sandworm cell added, increase speed
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
let intervalSpeed = 1000
let sandwormPosition
let currentWater
let currentSandworm
let currentDirection
let sandwormBody = [] // Array to store sandworm body in

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
// - intervalspeed


let currentSandworm


// On Page Load
resetVariables()





// Execution/Functions

// - game (main function) : called when start button is clicked. 


// - Random position for water cell

function generateWaterPosition() {
  currentWater = Math.floor(Math.random() * cellCount)
  const newCell = cells[currentWater]
  newCell.classList.add['water']
}

// - Random position for starting sandworm cell

function generateSandwormPosition() {
  currentSandworm = Math.floor(Math.random() * cellCount !== currentWater)
  const newCell = cells[currentSandworm]
  newCell.classList.add['snake']
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


