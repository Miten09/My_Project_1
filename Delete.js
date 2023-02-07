//Connection file is import here for connection with MongoDB
//This is used to delete our data in MongoDB.

const dbconnect = require("./Server");

async function Delete() {
  const db = await dbconnect();
  const result = await db.deleteOne({
    ProductName: "samsung m20",
  });
}
Delete();
