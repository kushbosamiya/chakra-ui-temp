import { use, post, listen } from "express";
import path from "path";
import { generate } from "shortid";
import Razorpay from "razorpay";
import cors from "cors";
import { json } from "body-parser";

use(cors());
use(json());

const razorpay = new Razorpay({
  key_id: "rzp_test_b3fImnNQPw3sRP",
  key_secret: "V0lUa6jF2EDtFs9jFjxc8t1t",
});

// app.get("https://ibb.co/RCP1hvL", (req, res) => {
//   res.sendFile(path.join(__dirname, "https://ibb.co/RCP1hvL"));
// });

post("/verification", (req, res) => {
  // do a validation
  const secret = "12345678";

  console.log(req.body);

  const crypto = require("crypto");

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    // process it
    require("fs").writeFileSync(
      "payment1.json",
      JSON.stringify(req.body, null, 4)
    );
  } else {
    // pass it
  }
  res.json({ status: "ok" });
});

post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = 499;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

listen(1337, () => {
  console.log("Listening on 1337");
});
