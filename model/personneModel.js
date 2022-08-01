const {query} = require("../functions/db")

const findPersonne = async () =>{
       try{
              return query("SELECT ID_PERSONNE, NOM, PRENOM, TEL, PROVINCE, COMMUNE, QUARTIER FROM personne WHERE 1")
       }
       catch(error){
              throw error
       }
}

const findById = async (id) => {
       try {
         return query("SELECT * FROM personne WHERE ID_PERSONNE  = ?", [id]);
       } catch (error) {
         throw error;
       }
};

const createOne = async (
       NOM,
       PRENOM,
       TEL,
       PROVINCE,
       COMMUNE,
       QUARTIER
     ) => {
       try {
         var sqlQuery =
           "INSERT INTO personne(NOM, PRENOM, TEL, PROVINCE, COMMUNE, QUARTIER)";
         sqlQuery += " VALUES(?, ?, ?, ?, ?, ?)";
         return query(sqlQuery, [
              NOM,
              PRENOM,
              TEL,
              PROVINCE,
              COMMUNE,
              QUARTIER
         ]);
       } catch (error) {
         throw error;
       }
     };

     const deleteOne = async (personneId) =>{
        try{
          return query("DELETE FROM personne WHERE ID_PERSONNE = ?",[personneId])
        }
        catch(error){
          throw error
        }
     }

     const updateOne = async (
      NOM,
      PRENOM,
      TEL,
      PROVINCE,
      COMMUNE,
      QUARTIER,
      personneId
     ) =>{
      try {
        var sqlQuery = "UPDATE personne SET NOM = ?, PRENOM = ?, TEL = ?, PROVINCE = ?, COMMUNE = ?, QUARTIER = ? WHERE ID_PERSONNE = ?";
        return query(sqlQuery, [
             NOM,
             PRENOM,
             TEL,
             PROVINCE,
             COMMUNE,
             QUARTIER,
             personneId
        ]);
      } catch (error) {
        throw error;
      }
     }

module.exports = {
       findPersonne,
       findById,
       createOne,
       deleteOne,
       updateOne
}