const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51IiFMtSGig8u12pPZuVMe7YPOSgT6f3dbmQt6oEhsjtkIm0NuLIQ0VTPZ8upIEtuxHaWX7W3tDVOlCLoTfkAlTHO004hQjo6Aq"
); // add a stripe key, (this test key will expire on 18th march 2021)

mongoose.pluralize(null);
app.use(express.json());
app.use(cors());
const busRoutes = require("./routes/bus");
const bookingRoutes = require("./routes/booking");
const userRoutes = require("./routes/user");
const routeRoutes = require("./routes/route");

app.post("/v1/api/stripe-payments", async (req, res) => {
  const { product, token } = req.body;
  console.log("PRODUCT", product);
  console.log("PRICE", product.poice);
  const idempontencyKey = uuidv4();
  return stripe.users
    .create({
      email: token.email,
      source: token.id,
    })
    .then((user) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "inr",
          user: user.id,
          receipt_email: token.email,
          description: `Purchase of ${product.name}`,
        },
        { idempontencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

app.use(busRoutes);
app.use(bookingRoutes);
app.use(userRoutes);
app.use(routeRoutes);

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://paytm:PaytmBus@123@paytmbusdb.mxlkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};


const start = async () => {
  await connect();
  app.listen(8000, () => console.log("Listening at Port 8000"));
};
start();
