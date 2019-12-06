import Koa from 'koa'
const path = require('path')
import koaBody from "koa-body";
import json from 'koa-json'
import cors from '@koa/cors'
const app = new Koa()
const helmet = require('koa-helmet')
const statics = require('koa-static')
const routers = require('./routers/routers')
import compose from "koa-compose";

/**
 * 使用 koa-compose 组合中间件
 * @type {compose.ComposedMiddleware<unknown>}
 */
const middleware =  compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  helmet(),
  cors(),
  json()
])

app.use(middleware)
app.use(routers())
app.listen(3000)
