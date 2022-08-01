const {query} = require("../functions/db")

const findEleve = async () =>{
       try{
              return query("SELECT ID_ETUDIENT, NOM, PRENOM, AGE FROM etudients WHERE 1")
       }
       catch(error){
              throw error
       }
}

const findById = async (id) => {
       try {
         return query("SELECT * FROM etudients WHERE ID_ETUDIENT  = ?", [id]);
       } catch (error) {
         throw error;
       }
};

const createOne = async (
       NOM,
       PRENOM,
       AGE
     ) => {
       try {
         var sqlQuery =
           "INSERT INTO etudients(NOM, PRENOM, AGE)";
         sqlQuery += " VALUES(?, ?, ?,)";
         return query(sqlQuery, [
              NOM,
              PRENOM,
              AGE
         ]);
       } catch (error) {
         throw error;
       }
     };
module.exports ={
       findEleve,
       findById,
       createOne
}

