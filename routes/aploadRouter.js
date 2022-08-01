const express = require("express")
const aploadController = require("../controller/aploadController")

const aploadRouter = express.Router()
aploadRouter.post("/upload-avatar",aploadController.createApload)

module.exports=aploadRouter