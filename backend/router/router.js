import express from "express"
import { DEVELOPERS, NAME, VERSION, WEB_SITE } from "../../config.json"
import crypto_module_list from "../modules/crypto.js"
import math_module_list from "../modules/math.js"
import utils_module_list from "../modules/utils.js"

const crypto_api = express.Router()
const math_api = express.Router()
const info_api = express.Router()
const utils_api = express.Router()

// router_list[0]       crypto
// router_list[1]       math
// router_list[2]       apiinfo
// router_list[3]       utils
const router_list = []

// 
// REST configure
//
const api_info = {
    'name': NAME,
    'version': VERSION,
    'web_site': WEB_SITE,
    'developers': DEVELOPERS
}

//
// apiinfo REST
//
info_api.get('/info', (req, resp) => {
    resp.send(api_info).status(200)
})
info_api.get('/name', (req, resp) => {
    resp.send({ 'name': api_info['name'] }).status(200)
})
info_api.get('/version', (req, resp) => {
    resp.send({ 'version': api_info['version'] }).status(200)
})
info_api.get('/developers', (req, resp) => {
    resp.send({ 'developers': api_info['developers'] }).status(200)
})


//
// crypto REST
//
crypto_api.get('/', (req, resp) => { resp.send({ 'name': 'crypto' }).status(200) })
// localhost:8080/crypto/md5
// POST {''}
crypto_api.post('/md5', crypto_module_list[0])
// localhost:8080/crypto/crc
// POST {''}
crypto_api.post('/crc', crypto_module_list[1])

//
// math REST
//
math_api.get('/', (req, resp) => { resp.send({ 'name': 'math' }).status(200) })
// localhost:8080/math/fixedtools?number=22&&wf=2&&type=fixed
math_api.get('/fixedtools', math_module_list[0])

//
// utils REST
//
utils_api.get('/', (req, resp) => { resp.send({ 'name': 'utils' }).status(200) })
// localhost:8080/utils/lickdog
utils_api.get('/lickdog', utils_module_list[0])
utils_api.get('/ohhh', utils_module_list[1])

router_list.push(crypto_api)
router_list.push(math_api)
router_list.push(info_api)
router_list.push(utils_api)

export default router_list