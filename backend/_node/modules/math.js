
const math_module_list = []

// 
// float-point number convert to fixed-point
// 
function FixedTools (req, resp) {
    const req_param_number = req.query.number
    const req_param_convert_type = req.query.type
    const req_param_wf = req.query.wf
    let number = 0

    if (!req_param_number
        || !req_param_wf
        || !req_param_convert_type) {
        return resp.send({ 'name': 'fixedtools', 'data': 'null' }).status(400)
    }

    switch (req_param_convert_type) {
        case "fixed":
            number = req_param_number / (2 ** req_param_wf)
            break
        case "float":
            number = Math.round(req_param_number * (2 ** req_param_wf))
            break
    }

    resp.send({ 'name': 'fixedtools', 'data': number }).status(200)
}

math_module_list.push(FixedTools)

export default math_module_list