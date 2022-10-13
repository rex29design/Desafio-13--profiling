//const {fork} = require("child_process")

const idx = async (req, res) => {
    try {
        res.render("randoms", {})
    } catch(err) {console.log(err)};
}

const calcular = async(req, res) => {
    try {
        const total = req.query.amount || 100000000
        const randoms = fork("./utils/randoms.js")
        randoms.send(total)

        randoms.on("message", (numbers) => {
            res.json({numbers})
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    idx,
    calcular
}