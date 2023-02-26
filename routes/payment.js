const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment");
router.post("/", paymentController.payInvoice);
router.post("/capture", paymentController.capturePayment);

module.exports = router;
