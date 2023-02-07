//Connection file is import here for connection with MongoDB
//This is used to find our data in MongoDB.

const dbconnect = require("./Server");

const main = async () => {
  let data = await dbconnect();
  data = await data.find().toArray();
  console.log(data);
};

main();
