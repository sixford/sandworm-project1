// high-level pseudo code 

// Initiate game and grid via start button and load water and sandworm onto grid, random placement
// move sandworm via eventlistener 'w' 'a' 's' 'd' or arrows
// If sandworm cell = water cell, add another cell to sandworm
// When water is "eaten" and sandworm cell added, increase speed
// if sandworm cell = sandworm cell, initiate game over
// if game over, reveal game over screen
// When restart button clicked, reset game

// Elements

const startButton = document.querySelector('#start')
const restartButton = document.querySelector('#restart')

function init() {

  const container = document.querySelector('.container')
  const width = 20
  const cellCount = width * width
  const cells = []
  for (let idx = 0; idx < cellCount; idx++) {
    const cell = document.createElement('div')
    cell.id = `cell-${idx}`
    cell.classList.add('grid')
    container.append(cell)
    cells.push(cell)
  }

  let gameStarted = false
  
  function startGame() {
    if (!gameStarted) {
      gameStarted = true
      window.requestAnimationFrame(main)
    }
  }


  // Elements


  // Variables 

  let sandwormBody = [305, 306, 307]
  let water = [Math.floor(Math.random() * cells.length)]
  let lastLoadTime = 0
  let score = 0
  let speed = 2
  let gameOver = false
  const scoreDisplay = document.querySelector('span')

  // add water + sandworm in cell in grid
  sandwormBody.forEach((idNumber) => {
    const cell = document.querySelector('#cell-' + idNumber)
    cell.classList.add('sandworm')
  })
  // addSandworm()
  water.forEach((idNumber) => {
    const cell = document.querySelector('#cell-' + idNumber)
    cell.classList.add('water')
  })

  const up = 38
  const right = 39
  const down = 40
  const left = 37

  function reset() {
    sandwormBody = [305, 306, 307]
    water = [Math.floor(Math.random() * 399)]
    lastLoadTime = 0
    score = 0
    speed = 2
    gameOver = false
    let gridsInnerHTML = ""
    for (let i = 0; i < 400; i++) {
      gridsInnerHTML += "<div id=" + "cell" + "-" + i + " class='grid'></div>"
    }
    document.querySelector('.container').innerHTML = gridsInnerHTML
    sandwormBody.forEach((idNumber) => {
      const cell = document.querySelector('#cell-' + idNumber)
      cell.classList.add('sandworm')
    })
    water.forEach((idNumber) => {
      const cell = document.querySelector('#cell-' + idNumber)
      cell.classList.add('water')
    })
    document.querySelector('#gameOver').style.visibility = 'hidden'
  }




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

  function sandwormMovement(direction) {
    console.log(direction)

    const sandwormHead = sandwormBody[sandwormBody.length - 1]
    const sandwormTail = sandwormBody[0]
    let newSandwormHead

    if (direction === up) {
      if (sandwormHead - width < 0) {
        newSandwormHead = sandwormHead + cellCount - width
      } else {
        newSandwormHead = sandwormHead - width
      }
    } else if (direction === right) {
      if (sandwormHead % width === width - 1) {
        newSandwormHead = sandwormHead - width + 1
      } else {
        newSandwormHead = sandwormHead + 1
      }
    } else if (direction === down) {
      if (sandwormHead + width >= cellCount) {
        newSandwormHead = sandwormHead - cellCount + width
      } else {
        newSandwormHead = sandwormHead + width
      }
    } else if (direction === left) {
      if (sandwormHead % width === 0) {
        newSandwormHead = sandwormHead + width - 1
      } else {
        newSandwormHead = sandwormHead - 1
      }
    }


    const drinkingWater = document.querySelector(`#cell-${newSandwormHead}`).classList.contains('water')
    if (drinkingWater) {
      document.querySelector(`#cell-${newSandwormHead}`).classList.remove('water')
      sandwormBody.unshift(sandwormTail)
      water.shift(newSandwormHead)
      score++
      scoreDisplay.innerText = score
      speed++

      let randomId = Math.floor(Math.random() * 399)
      while (sandwormBody.includes(randomId)) {
        randomId = Math.floor(Math.random() * 399)
      }
      water.unshift(randomId)
      document.querySelector('#cell-' + randomId).classList.add('water')
    } else {
      sandwormBody.shift()
      document.querySelector(`#cell-${sandwormTail}`).classList.remove('sandworm')
    }
    const eatingSelf = document.querySelector(`#cell-${newSandwormHead}`).classList.contains('sandworm')
    if (eatingSelf) {
      gameOver = true
      document.querySelector('#gameOver').style.visibility = 'visible'
      document.querySelector('#restart').addEventListener('click', () => {
        reset() 
      })
    }
    sandwormBody.push(newSandwormHead)
    document.querySelector(`#cell-${newSandwormHead}`).classList.add('sandworm')
  }
  //   if (currentDirection === right){
  //     newSandwormHead = (sandwormHead + 1) % cellCount
  //   } else if (currentDirection === left) {
  //     newSandwormHead = (sandwormHead - 1 + cellCount) %
  //   } else if (currentDirection === up) {
  //     newSandwormHead = (sandwormHead - width + cellCount) %
  //   } else if (currentDirection === down) {
  //     newSandwormHead = (sandwormHead + width) % cellCount
  //   }
  // }





  // Variable 

  // - current position of sandworm - Made random cell
  // - intervalspeed

  let currentDirection = up
  function updateDirection(evt) {
    if (evt.keyCode === up) {
      currentDirection = up
    } else if (evt.keyCode === right) {
      currentDirection = right
    } else if (evt.keyCode === down) {
      currentDirection = down
    } else if (evt.keyCode === left) {
      currentDirection = left
    }
  }


  function main(currentTime) {
    window.requestAnimationFrame(main)
    const secsSinceLastLoading = (currentTime - lastLoadTime) / 1000
    if (secsSinceLastLoading < 1 / speed) return
    console.log('loading')
    lastLoadTime = currentTime
    if (!gameOver) {
      sandwormMovement(currentDirection)
    }
  }
  // window.requestAnimationFrame(main)


  // Execution/Functions


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


  // - Bring z-index (game over grid) to front

  startButton.addEventListener('click', startGame)
  restartButton.addEventListener('click', reset)

  // Events
  document.addEventListener('keydown', updateDirection)
}

window.addEventListener('DOMContentLoaded', init)
