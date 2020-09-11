const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
// secret key
const stripe = require("stripe")(
  "sk_test_51HQ4A1Hbpicdl2H0PByYYqaE7Azyk9Qk2R62uwBLrMUgzy8dfIZQIS7Q1hPFJbzHXgZBSmXqmtyruwKVeY6UJEQW00q2u7NYZA"
);

// API

// Application Config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
// root endpoint
app.get("/", (request, response) =>
  response.status(200).send("Hi root Endpoint")
);

// http://localhost:5001/clone-98e52/us-central1/api/some
// app.get('/some', (request, response) => response.status(200).send('Hi some Endpoint'))

// see Payment.js
app.post("/payments/create", async (request, response) => {
  //?total - query param
  // amount subunits
  const total = request.query.total;
  // Запрос на оплату получен. look in terminal:  Payment request recieved for this amount >>>  259372.00000000003
  console.log("Payment request recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // response status OK - Created paymentIntent
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// example EndPoint:  // root endpoint
// http://localhost:5001/clone-98e52/us-central1/api
