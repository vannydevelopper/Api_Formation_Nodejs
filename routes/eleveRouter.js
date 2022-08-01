const express = require("express")

const eleveController = require("../controller/eleveController")

const eleveRouter = express.Router()
eleveRouter.get("/", eleveController.findAllEleve)
eleveRouter.post("/ajoutEleve", eleveController.createEleve)

module.exports = eleveRouter