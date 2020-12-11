const {
  Sequelize
} = require('sequelize')

const {
  dbname,
  dbpassword,
  dbuser,
  dbhost
} = require('../config/config')

const db = new Sequelize(dbname, dbuser, dbpassword, {
  host: dbhost,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})

// console.log(db)

module.exports = db
