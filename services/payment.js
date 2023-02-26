const Invoice = require("../modals/invoice");
const Insta = require("../config/instaMojo");
module.exports = {
  payInvoice: async (id) => {
    try {
      let data = new Insta.PaymentData();
      const invoice = await Invoice.findById(id);
      console.log("🚀 ~ file: payment.js:8 ~ payInvoice: ~ invoice:", invoice);

      data.purpose = "Test"; // REQUIRED
      data.amount = invoice.total_amount; // REQUIRED
      data.currency = "INR";
      data.buyer_name = invoice.name;
      data.email = invoice.email;
      data.webhook = process.env.BASE_URL + "/payments";
      data.setRedirectUrl(process.env.FRONTEND_URL);
      console.log("🚀 ~ file: payment.js:17 ~ payInvoice: ~ data:", data);
      Insta.createPayment(data, function (error, response) {
        if (error) {
          // some error
        } else {
          console.log("🚀 ~ file: payment.js:18 ~ response:", response);

          // Payment redirection link at response.payment_request.longurl
          return response;
        }
      });
    } catch (err) {
      console.error(err);
    }
  },
};
