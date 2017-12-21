'use strict'
let playerToken = 'X'

const onBoxClick = function (event) {
  // create boxId token to use in jquery to update correct box
  const boxId = '#' + this.id
  if (playerToken === 'X') {
    playerToken = 'O'
    $(boxId).text('X')
  } else {
    playerToken = 'X'
    $(boxId).text('O')
  }
}

const addHandlers = function () {
  $('.gameSquare').on('click', onBoxClick)
}

module.exports = {
  addHandlers
}
