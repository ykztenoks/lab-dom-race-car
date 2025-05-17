class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro")
    this.gameScreen = document.querySelector("#game-screen")
    this.endScreen = document.querySelector("#game-end")
    this.player = null
    this.height = 600
    this.width = 500
    this.obstacles = []
    this.score = 0
    this.lives = 3
    this.gameIsOver = false
    this.gameIntervalId = null
  }
  start() {
    this.gameScreen.style.height = this.height + "px"
    this.gameScreen.style.width = this.width + "px"
    this.startScreen.style.display = "none"
    this.gameScreen.style.display = "block"
    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, 16)
  }

  gameLoop() {
    this.update()
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
      this.gameIntervalId = null
    }
  }

  update() {
    this.player.move()
    this.obstacles.forEach((obstacle) => {
      obstacle.top += 1
      obstacle.obstacle.style.top = obstacle.top + "px"
    })
  }
}
