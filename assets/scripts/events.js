'use strict'

const onBoxClick = function (event) {
  event.preventDefault()
  console.log('I really hope this worked')
}

const addHandlers = function () {
  $('#0').on('click', onBoxClick)
}

module.exports = {
  addHandlers
}
