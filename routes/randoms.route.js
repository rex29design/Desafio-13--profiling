const {Router} = require("express")
const randomCont = require("../controllers/randoms")

const router = Router()

router.get("/", randomCont.idx)
router.get("/calcular", randomCont.calcular)


module.exports = router