'use strict'

const onBoxClick = function (event) {
  const boxId = '#' + this.id
  $(boxId).text('X')
  // let playerToken = 'X'
  // if (playerToken === 'X') {
  //   playerToken = 'O'
  // } else {
  //   playerToken = 'X'
}

const addHandlers = function () {
  $('.gameSquare').on('click', onBoxClick)
}

module.exports = {
  addHandlers
}
