const { verify, sign } = require('jsonwebtoken')
const {
  SK
} = require('../config/config')

// 创建异常对象
function createError (code=1, msg='鉴权失败') {
  return {
    code,
    msg
  }
}

// 创建成功的登录返回
function loginSuccess (token, user) {
  return {
    code: 0,
    msg: '登录成功',
    res: {
      token,
      user
    }
  }
}

const jwt = async (ctx, next) => {
  let token = ''
  if (ctx.request.headers.authorization) {
    token = ctx.request.headers.authorization.split(' ')[1]
    const res = verify(token, SK)
    console.log(res)
    await next()
  } else {
    ctx.status = 401
    ctx.body = createError()
  }
}

const createToken = (id, role) => {
  const payload = {
    id,
    role
  }
  return sign(payload, SK)
}

module.exports = {
  createError,
  jwt,
  createToken,
  loginSuccess
}