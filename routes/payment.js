const express = require("express");
const router = express.Router();
const paymentControoler = require("../controllers/payment");
router.post("/", paymentControoler.payInvoice);
router.post("/capture", paymentControoler.capturePayment);

module.exports = router;
