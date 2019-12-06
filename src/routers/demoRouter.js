const Router = require('koa-router')
import DemoController from '../api/demoController'

const router = new Router()

router.get('/demo',DemoController.demo)

module.exports = router
