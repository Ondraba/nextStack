'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
  title: {
    $type: 'string',
    $required: true
  }
}).compile('PageType')