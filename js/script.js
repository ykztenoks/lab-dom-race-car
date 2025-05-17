window.onload = function () {
  const startButton = document.getElementById("start-button")
  const restartButton = document.getElementById("restart-button")
  let game = null
  let player = null
  let obstacleInterval = null
  startButton.addEventListener("click", function () {
    startGame()
  })

  document.addEventListener("keydown", (e) => {
    console.log(e.key)
    if (e.key === "ArrowRight") {
      player.directionX = 1
    }
    if (e.key === "ArrowLeft") {
      player.directionX = -1
    }
    if (e.key === "ArrowUp") {
      player.directionY = -1
    }
    if (e.key === "ArrowDown") {
      player.directionY = 1
    }
  })

  function generateObstacle() {
    let obstacle = document.createElement("img")
    obstacle.style.width = "50px"
    obstacle.style.height = "100px"
    obstacle.style.position = "absolute"

    let top = 0
    let left = Math.floor(Math.random() * 450)
    game.obstacles.push({
      obstacle,
      top: top,
      left: left,
    })

    obstacle.style.top = top + "px"
    obstacle.style.left = left + "px"
    obstacle.style.rotate = "180deg"
    obstacle.src = "../images/redCar.png"

    game.gameScreen.appendChild(obstacle)
  }

  function startGame() {
    game = new Game()
    player = new Player(game.gameScreen, 223, 520, 100, 50)
    game.player = player
    game.start()
    obstacleInterval = setInterval(() => {
      generateObstacle()
    }, 3000)
  }
}
