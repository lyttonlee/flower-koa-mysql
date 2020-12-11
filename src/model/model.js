const {
  Model,
  DataTypes
} = require('sequelize')

const db = require('../sql/db')

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: ''
  },
  createAt: {
    type: DataTypes.DATE,
    defaultValue: new Date()
  },
  openId: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'user'
})


const Admin = db.define('admin_user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: ''
  },
  createAt: {
    type: DataTypes.DATE,
    defaultValue: new Date()
  },
  role: {
    type: DataTypes.INTEGER,
    defaultValue: 2,
    allowNull: false
  }
}, {
  tableName: 'admin_user'
})

module.exports = {
  User,
  Admin
}
