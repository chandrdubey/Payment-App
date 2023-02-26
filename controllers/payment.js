const paymentService = require("../services/payment");

module.exports = {
  payInvoice: async (req, res) => {
    try {
      console.log(req.body);
      console.log("🚀 ~ file: payment.js:7 ~ payInvoice: ~ req.body:", req);
      const response = await paymentService.payInvoice(req.body.id);
      res.json(200, {
        success: true,
        response,
      });
    } catch (err) {
      console.log(err);
    }
  },
  capturePayment: async (req, res) => {
    try {
      const allInvoices = await paymentService.payInvoice(req.body.id);
      res.json(200, {
        success: true,
        data: {
          invoices: allInvoices,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
