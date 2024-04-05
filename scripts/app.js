// high-level pseudo code 

// Initiate game and grid via start button and load water and sandworm onto grid, random placement
// move sandworm via eventlistener 'w' 'a' 's' 'd' or arrows
// If sandworm cell = water cell, add another cell to sandworm
// When water is "eaten" and sandworm cell added, increase speed
// if sandworm cell = sandworm cell, initiate game over
// if game over, reveal game over screen
// When restart button clicked, reset game

const cells = []

function init() {

  const container = document.querySelector('.container')
  const width = 20
  const cellCount = width * width
  const cells = []
  for (let idx = 0; idx < cellCount; idx++) {
    // Generate element
    const cell = document.createElement('div')
    cell.id = `cell-${idx}`
    cell.dataset.index = idx
    cell.classList.add('cell')

    // Place the character in the starting cell
    // if (idx === startingPos) {
    //   cell.classList.add('water')
    // }

    // Set height and width of cell
    // cell.style.width = `${100 / width}%`
    // cell.style.height = `${100 / width}%`

    // Add cell to the UI
    container.append(cell)

    // Add the cell to the cells array
    cells.push(cell)
  }



  // Elements

  // const startButton = document.querySelector('#start')
  // const restartButton = document.querySelector('#restart')


  // Variables 

  let sandwormBody = [305, 306]
  let water = [Math.floor(Math.random() * cells.length)]
  let score = 0
  let speed = 2
  let gameOver = false
  const scoreDisplay = document.querySelector('span')



  // add water + sandworm in cell in grid
  sandwormBody.forEach((idNumber) => {
    const cell = document.querySelector('#cell-' + idNumber)
    cell.classList.add('sandworm')
    cell.style.backgroundColor = ('blue')
    console.log(`Added sandworm to cell ${idNumber}`)
    console.log(cell)
  })

  // addSandworm()

  water.forEach((idNumber) => {
    const cell = document.querySelector('#cell-' + idNumber)
    cell.classList.add('water')
    console.log(`Added water to cell ${idNumber}`)
  })

  // addWater()

  // function generateWater() {
  //   currentWater = Math.floor(Math.random() * cellCount)
  //   cells[currentWater].classList.add('water')
  // }

  // function generateSandworm() {
  //   currentSandworm = startingPos
  //   cells[currentSandworm].classList.add('sandworm')
  // }



  // function generateGrid() {


  // function startGame() {

  //   if (!gameStarted) {
  //     gameStarted = true
  //     startButton.style.display = 'none'
  //     restartButton.style.display = 'inline-block'
  //     intervalSpeed = 700
  //     currentDirection = 'right'
  //     moveSandworm()
  //   }
  // }
  // console.log(startGame)

  // function sandwormMovement(currentDirection) {}

  //   const sandwormHead = sandwormBody[sandwormBody.length - 1]
  //   const sandwormTail = sandwormBody[0]
  //   let newSandwormHead




  // Variable 

  // - score

  // - current position of sandworm - Made random cell
  // - intervalspeed





  // On Page Load
  // window.onload = () => {
  //   generateGrid()
  // }





  // Execution/Functions

  // - game (main function) : called when start button is clicked. 


  // - Random position for water cell

  // function generateWaterPosition() {
  //   currentWater = Math.floor(Math.random() * cellCount)
  //   const newCell = cells[currentWater]
  //   newCell.classList.add['water']
  // }

  // - Random position for starting sandworm cell

  // function generateSandwormPosition() {
  //   currentSandworm = Math.floor(Math.random() * cellCount !== currentWater)
  //   const newCell = cells[currentSandworm]
  //   newCell.classList.add['sandworm']
  // }


  // - check for collision with water cell

  // - check for collision with sandworm cell

  // - if collision with water cell, add to sandworm cell 

  // - if sandworm cell added, increase speed/interval

  // - If collision with sandworm cell, game over

  // - Add to score if colliison with water cell

  // - reset variables; score to 0 

  // function resetGame() {
  //   score = 0
  //   intervalSpeed = 1000
  //   gameStarted = false
  //   grid.innerHTML = ''
  //   cells = []
  //   sandwormBody = [startingPos]

  //   generateGrid()
  // }


  // - Function: if sandworm cell moves right off grid, reset on same row.

  // - Bring z-index (game over grid) to front



  // Events

  // - Initialise game when start clicked
  // startButton.addEventListener('click', startGame)
  // - Handle user input; moving sandworm

  // - When restart button clicked, reset grid
  // restartButton.addEventListener('click', resetGame)

}
window.addEventListener('DOMContentLoaded', init)
