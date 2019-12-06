const combineRouters = require('koa-combine-routers')
const demoRouter = require('./demoRouter')

module.exports = combineRouters(
  demoRouter,
)
