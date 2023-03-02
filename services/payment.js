const Invoice = require("../modals/invoice");
const Insta = require("../config/instaMojo");
module.exports = {
  payInvoice: async (id) => {
    try {
      let data = {};
      const invoice = await Invoice.findById(id);
      console.log("🚀 ~ file: payment.js:8 ~ payInvoice: ~ invoice:", invoice);

      data.purpose = "Test"; // REQUIRED
      data.amount = invoice.total_amount; // REQUIRED
      data.currency = "INR";
      data.buyer_name = invoice.name;
      data.email = invoice.email;
      data.webhook = process.env.BASE_URL + "/payments";
      data.redirect_url = process.env.FRONTEND_URL;
      console.log("🚀 ~ file: payment.js:17 ~ payInvoice: ~ data:", data);
      const paymentData = await Insta.PaymentData(data);
      const response = await Insta.createNewPaymentRequest(paymentData);
      console.log(
        "🚀 ~ file: payment.js:19 ~ payInvoice: ~ response:",
        response
      );
      return response.payment_request;
      //  Insta.createPayment(data, function (error, response) {
      //   if (error) {
      //     // some error
      //   } else {
      //     console.log("🚀 ~ file: payment.js:18 ~ response:", response);

      //     // Payment redirection link at response.payment_request.longurl

      //   }
      // });
    } catch (err) {
      console.error(err);
    }
  },
  capturePayment: async (data) => {
    try {
      const paymentAt = new Date();
      const updateData = {
        gatewayPaymentId: data.payment_id,
        paymentFee: data.fees,
        status: "Completed",
        paymentAt,
      };
      await Invoice.updateOne({ email: data.buyer }, updateData);
    } catch (err) {
      console.error(err);
    }
  },
};
