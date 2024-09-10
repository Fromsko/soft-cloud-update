import express from 'express'
import { SERVER } from "../config.json"
import router_list from './router/router.js'
const app = express()

//
// server options
//
app.use(express.json())

// router
app.get('/', (_, resp) => {
    resp.send('Server already running')
})
app.use('/crypto', router_list[0])
app.use('/math', router_list[1])
app.use('/api', router_list[2])
app.use('/utils', router_list[3])

// run!!!
app.listen(SERVER.PORT, () => {
    console.log(`Server already running :> [${SERVER.MODE}]`)
    console.log(`You can goto :> http://${SERVER.HOST}:${SERVER.PORT}`)
})

/*
// 获取当前函数名
var tmp = arguments.callee.toString()
var re = /function\s*(\w*)/i
var matches = re.exec(tmp)
alert(matches[1]);
*/