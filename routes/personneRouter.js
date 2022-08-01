const express = require("express")

const personneController = require("../controller/personneController")


const personneRouter = express.Router()
personneRouter.get("/", personneController.findAffPersonne)
personneRouter.post("/ajout", personneController.createPersonne)
personneRouter.delete("/:personneId", personneController.deletePersonne)
personneRouter.put("/:personneId", personneController.updatePersonne)

module.exports = personneRouter