//Connection file is import here for connection with MongoDB
//This is used to Insert our data in MongoDB.

const dbconnect = require("./Server");

async function insert() {
  const db = await dbconnect();
  const result = await db.insertMany([
    {
      ProductName: "samsung",
      Quantity: 50,
      unitPrice: 15000,
      unitStock: 10,
      Category: "Electronic",
    },
    {
      ProductName: "Redmi",
      Quantity: 20,
      unitPrice: 10000,
      unitStock: 7,
      Category: "Electronic",
    },
    {
      ProductName: "Teddy Bear",
      Quantity: 50,
      unitPrice: 500,
      unitStock: 10,
      Category: "Toys",
    },
    {
      ProductName: "Toy Car",
      Quantity: 33,
      unitPrice: 200,
      unitStock: 20,
      Category: "Toys",
    },
  ]);
}
insert();
