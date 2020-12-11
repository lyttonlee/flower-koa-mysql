const Koa = require('koa')

const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require('path')

const {
  port
} = require('./config/config')

const db = require('./sql/db')

const router = require('./router/routes')

db.authenticate().then(() => {
  console.log('数据库连接成功！')
}).catch((error) => {
  console.log('数据库连接失败')
  console.log(error)
})

const app = new Koa()

// 设置静态资源目录
app.use(static(path.join(__dirname, '../public')))

app.use(bodyParser())

app.use(logger())

app.use(router.routes()).use(router.allowedMethods())

// error
const handleError = (ctx, next, error) => {
  if (error) {
    ctx.status = error.status ? error.status : 500
    ctx.body = error.message ? error.message : 'the server bad'
  }
  next()
}

app.use(handleError)

app.listen(port, () => {
  console.log(`the server is listening on port ${port}`)
})