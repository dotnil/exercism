// https://exercism.org/tracks/javascript/exercises/high-score-board/solutions/dotnil

export function createScoreBoard() {
  const testObject = {
    'The Best Ever': 1000000
  }
  return testObject
}

export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score
  return scoreBoard
}

export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player]
  return scoreBoard
}

export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points
  return scoreBoard
}

export function applyMondayBonus(scoreBoard) {
  Object.entries(scoreBoard).forEach(([key, value]) => scoreBoard[key] = value + 100)
  return scoreBoard
}

export function normalizeScore(params) {
  const { normalizeFunction, score } = params
  return normalizeFunction(score)
}
