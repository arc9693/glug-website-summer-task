'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APP_ID:process.env.APP_ID,
  AUTH_TOKEN:process.env.AUTH_TOKEN
})
