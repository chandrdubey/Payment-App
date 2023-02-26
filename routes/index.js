const express = require("express");
const router = express.Router();

const invoice_router = require("./invoice");
const payment_router = require("./payment");

router.use("/invoices", invoice_router);
router.use("/payments", payment_router);

module.exports = router;
