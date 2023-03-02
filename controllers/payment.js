const paymentService = require("../services/payment");

module.exports = {
  payInvoice: async (req, res) => {
    try {
      console.log(req.body, req.params);
      console.log("🚀 ~ file: payment.js:7 ~ payInvoice: ~ req.body:");
      const response = await paymentService.payInvoice(req.body.id);
      console.log(
        "🚀 ~ file: payment.js:9 ~ payInvoice: ~ response:",
        response
      );
      res.json(200, {
        success: true,
        data: response,
      });
    } catch (err) {
      console.log(err);
    }
  },
  capturePayment: async (req, res) => {
    try {
      const allInvoices = await paymentService.capturePayment(req.body);
      res.json(200, {
        success: true,
        message: "Success",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
