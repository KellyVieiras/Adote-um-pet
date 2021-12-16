const express = require("express")
const router = express.Router()
const controller = require("../controller/exemplosController")


router.get("/todos", controller.getAll)
router.post("/criar", controller.criarCadastro)
router.put("/atualizar/:id", controller.atualizarCadastro)
router.delete("/deletar/:id", controller.deletarCadastro)
router.get("/todos/:id", controller.buscarId)
module.exports = router





