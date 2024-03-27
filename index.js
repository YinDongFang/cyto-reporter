const getCurrentTimestamp = require('./getCurrentTimestamp')
const deepCopy = require('./deepCopy')
const truncateString = require('./truncateString')
const isEvenNumber = require('./isEvenNumber')

module.exports = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }