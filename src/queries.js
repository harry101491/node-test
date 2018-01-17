const promise = require("bluebird");

const config = { 
    promiseLib: promise
};
const pgPromise = require("pg-promise")(config);
const connectionString = "postgres://localhost:5432/puppies";
const db = pgPromise(connectionString);

// get all the puppies 
const getAllPuppies = async (req, res) => {
    try {
        const data = await db.any("SELECT * FROM huskeys");
        res.status(200).json({ 
            status: "sucess",
            data: data,
            message: "data has been received"
         });
    }
    catch(err) {
        console.log(`error has occured ${err}`);
    }
}


module.exports.getAllPuppies = getAllPuppies;
