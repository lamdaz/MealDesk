const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//-----mongodb-----
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const database = client.db("MealDesk");
    const foodCollection = database.collection("foods");
    const orderCollection = database.collection("orders");

    // -----get all foods-----
    app.get("/foods", async (req, res) => {
      const result = await foodCollection.find().toArray();
      res.send(result);
    });

    // -----get food using id-----
    app.get("/foods/:id", async (req, res) => {
      const { id } = req.params;
      const result = await foodCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // -----get food using purchase-----
    app.get("/purchase/:id", async (req, res) => {
      const { id } = req.params;
      const result = await foodCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // -----get food for update-----
    app.get("/update-food/:id", async (req, res) => {
      const { id } = req.params;
      const result = await foodCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // -----get food using email-----
    app.get("/myFoods/:email", async (req, res) => {
      const email = req.params.email;
      const result = await foodCollection
        .find({ "addedBy.email": email })
        .toArray();
      res.send(result);
    });

    // -----order by using id-----
    app.get("/purchase-order/:id", async (req, res) => {
      const { id } = req.params;
      const result = await orderCollection.findOne({ "foodId.id": id });
      res.send(result);
    });

    // ----order get-----
    app.get("/orders/:email", async (req, res) => {
      const email = req.params.email;
      const result = await orderCollection.find({ email }).toArray();
      res.send(result);
    });

    // -----send food to the server-----
    app.post("/addFood", async (req, res) => {
      const foodData = req.body;
      const result = await foodCollection.insertOne(foodData);
      res.send({ ...result, message: "Data Receive." });
    });

    app.post("/orderData", async (req, res) => {
      const orderData = req.body;
      const foodId = orderData?.foodId?.id;
      const orderQty = parseInt(orderData?.quantity, 10);

      if (!foodId || Number.isNaN(orderQty) || orderQty <= 0) {
        return res.status(400).send({ message: "Invalid order request." });
      }

      try {
        const updateResult = await foodCollection.updateOne(
          { _id: new ObjectId(foodId), quantity: { $gte: orderQty } },
          { $inc: { quantity: -orderQty, purchases: orderQty } },
        );

        if (updateResult.modifiedCount === 0) {
          return res
            .status(400)
            .send({ message: "Insufficient stock for this order." });
        }

        const normalizedOrder = {
          ...orderData,
          quantity: orderQty,
          date: orderData.date || new Date().toISOString(),
        };

        const result = await orderCollection.insertOne(normalizedOrder);
        res.send({ ...result, message: "Order placed and stock updated." });
      } catch (error) {
        console.error("Failed to place order:", error);
        res.status(500).send({ message: "Could not place order. Try again." });
      }
    });

    // -----update food-----
    app.put("/update-food/:id", async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const updateFood = await foodCollection.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: data,
        },
      );
      res.send(updateFood);
    });

    // -----delete using id-----
    app.delete("/deleteFood/:id", async (req, res) => {
      const id = req.params.id;
      const result = await foodCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // -----order delete-----
    app.delete("/delete-order/:id", async (req, res) => {
      const id = req.params.id;
      const result = await orderCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
  }
}
run().catch(console.dir);

// -----root-----
app.get("/", async (req, res) => {
  res.send("MealDesk server is running...");
});

app.listen(port, () => {
  console.log(`Server is running perfectly on port ${port}`);
});
