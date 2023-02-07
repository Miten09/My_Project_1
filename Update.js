//This is used to Update our data in MongoDB.

const dbconnect = require("./Server");

async function updateData() {
  const data = await dbconnect();
  const result = await data.updateMany(
    { ProductName: "samsung m10" },
    { $set: { ProductName: "samsung m20", Quantity: 25 } }
  );
}
updateData();
