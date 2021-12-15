const express = require("express")
const router = express.Router()
const controller = require("../controller/exemplosController")


router.get("/todos", controller.getAll)
router.post("/criar", controller.criarCadastro)

module.exports = router





