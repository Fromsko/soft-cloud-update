import crypto from "node:crypto"


const crypto_module_list = []

//
// MD5
//
function Md5 (req, resp) {
    const req_param_text = req.body.text

    if (!req_param_text) {
        return resp.send({ 'name': 'md5', 'data': 'null' }).status(400)
    }

    const text = crypto.createHash('md5')
        .update(req_param_text)
        .digest("hex")
        .toLowerCase()

    return resp.send({ 'name': 'md5', 'data': text }).status(200)
}

function Crc32 (req, resp) {

}

crypto_module_list.push(Md5)
crypto_module_list.push(Crc32)

export default crypto_module_list