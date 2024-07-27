
// data
import { DB_LOCAL } from '../database/db.js'

const { lick_dog_quotation, ohhh_quotation } = DB_LOCAL

const utils_api = []

//
// 别问我为什么这条注释是中文
// 我真是个傻逼
//
function LickDog (req, resp) {
    const i = Math.floor(Math.random() * lick_dog_quotation.length)
    resp.send({ 'name': 'lickdog', 'content': lick_dog_quotation[i] }).status(200)
}

// 
// 这沙雕函数名, 泥马用全大写命名真的操丹
// 
function OHHH (req, resp) {
    const i = Math.floor(Math.random() * ohhh_quotation.length)
    resp.send({ 'name': 'ohhh', 'content': ohhh_quotation[i] }).status(200)
}

utils_api.push(LickDog)
utils_api.push(OHHH)


export default utils_api