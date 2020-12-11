const {
  User,
  Admin
} = require('../../model/model')
const { createToken, loginSuccess, createError } = require('../../utils/utils')

const adminRegin = async (ctx) => {
  console.log(ctx.request.body)
  const user = await Admin.create(ctx.request.body)
  ctx.body = user
}

const adminLogin = async (ctx) => {
  const user = ctx.request.body
  const curUser = await Admin.findOne({
    where: {
      ...user
    },
    attributes: ['id', 'username', 'role', 'avatar', 'createAt']
  })
  console.log(curUser)
  if (curUser) {
    const token = createToken(curUser.id, curUser.role)
    ctx.body = loginSuccess(token, curUser)
  } else {
    ctx.body = createError(1, '用户名或密码错误')
  }
}

module.exports = {
  adminLogin,
  adminRegin
}