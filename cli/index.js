const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const log = console.log

const questions = [
  {
    type: 'list',
    name: 'create',
    message: '请选择要创建的类型',
    choices: ['页面', '组件']
  },
  {
    type: 'input',
    name: 'input',
    message: '请输入文件名称',
  },
]

const init = () => {
  log(figlet.textSync('Template CLI', {
    width: 100
  }))
}

const askQuestions = (questions = []) => {
  return inquirer.prompt(questions)
}

const runCmd = async () => {
  init()
  const {create, input} = await askQuestions(questions)
  // log(create)
  // log(chalk.bold.red(input))
  fs.readFile(path.join(__dirname, './template/model.js'), {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    // console.log(data)
    const content = data.replace(/model/g, input.toLowerCase())
    console.log(content)
    fs.mkdir(`src/model/${input}`, (err) => {
      if (err) {
        console.log(err)
        console.log(chalk.red(`${input} is existed`))
        return
      }
    })
    fs.writeFile(`src/model/${input}/${input}.js`, content, 'utf-8', (err) => {
      if (err) {
        console.log(err)
      }
    })
  })
}

runCmd()

