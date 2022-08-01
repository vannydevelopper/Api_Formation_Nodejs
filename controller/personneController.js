const personneModel = require("../model/personneModel")
const Validation = require("../class/Validation")

const findAffPersonne = async (req, res) =>{
       try{
              const personne = await personneModel.findPersonne()
              res.status(200).json(personne)
       }
       catch(error){
              console.log(error)
              res.status(500).send("server error")
       }
}

const createPersonne = async (req, res) =>{
       try{
              const {
                     NOM,
                     PRENOM,
                     TEL,
                     PROVINCE,
                     COMMUNE,
                     QUARTIER
              } = req.body
       
              const validation = new Validation(req.body)
              validation.run()
              if(validation.isValidate()){
                     const {insertId} = await personneModel.createOne(
                            NOM,
                            PRENOM,
                            TEL,
                            PROVINCE,
                            COMMUNE,
                            QUARTIER
                     );
                    const person = (await personneModel.findById(insertId))[0]
                    res.status(200).json({
                     success: true,
                     message:"l'enregistrement est faite avec succes"
                    })
              }
              else{
                     res.status(422).json({
                            success: false
                     })
              }
              
       }
       catch(error){
              console.log(error)
              res.status(500).send("server error")
       }
}

const deletePersonne = async (req, res) =>{
       try{
              const {personneId} = req.params;
              //console.log(req.params)
              await personneModel.deleteOne(personneId);
              res.status(200).json({
                     deleted: true,
                     message:"la suppression est faite avec succes"
              })
       }
       catch(error){
              console.log(error)
              res.status(500).send("server error")
       }
}

const updatePersonne = async (req, res) =>{
       
       try{
              const {
                     NOM,
                     PRENOM,
                     TEL,
                     PROVINCE,
                     COMMUNE,
                     QUARTIER
              } = req.body
              const {personneId} = req.params;
              // console.log(personneId)
              const validation = new Validation(req.body)
              validation.run()
              if(validation.isValidate()){
                     const {insertId} = await personneModel.updateOne(
                            NOM,
                            PRENOM,
                            TEL,
                            PROVINCE,
                            COMMUNE,
                            QUARTIER,
                            personneId
                     );
              const person = (await personneModel.findById(insertId))[0]
                    res.status(200).json({
                     success: true,
                     message:"la modification est faite avec succes"
                    })
              }
              else{
                     res.status(422).json({
                            success: false
                     })
              }
       }
       catch(error){
              console.log(error)
              res.status(500).send("server error")
       }
}

module.exports = {
       findAffPersonne,
       createPersonne,
       deletePersonne,
       updatePersonne
}