const KoaRouter = require('koa-router')

const {
  adminLogin,
  adminRegin
} = require('./controller/user')

const router = new KoaRouter({
  prefix: '/api/v1'
})

router
  .post('/admin/signin', adminRegin)
  .post('/admin/login', adminLogin)
  .get('/test', async (ctx, next) => {
    ctx.body = 'test ok!'
  })

module.exports = router
