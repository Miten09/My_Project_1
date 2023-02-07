//All this APIs which i made is checked by using Postman.

const express = require("express");
const app = express();
const dbconnect = require("./Server");

app.use(express.json());

//By using app.get we can see the data in the frontend

app.get("/products", async (req, res) => {
  const productdata = await dbconnect();
  const result = await productdata.find().toArray();
  res.send(result);
});

//By using app.post we can add/create the data in mongoDB

app.post("/products", async (req, res) => {
  const productdata = await dbconnect();
  const result = await productdata.insertOne(req.body);
  res.send(result);
});

//By using app.put we can update the data in mongoDB

app.put("/products", async (req, res) => {
  const productdata = await dbconnect();
  const result = await productdata.updateOne(
    {
      ProductName: "Iphone",
    },
    { $set: { ProductName: "Iphone", UnitStock: 300 } }
  );
  res.send(result);
});

//By using app.delete we can delete the data from mongoDB

app.delete("/products", async (req, res) => {
  const productdata = await dbconnect();
  const result = await productdata.deleteMany(req.body);
  res.send(result);
});

// By using app.listen we can easily create server by entering our PortNumber.

app.listen(7555, (err) => {
  console.log("Server Start");
});
