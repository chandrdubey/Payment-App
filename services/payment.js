const Invoice = require("../modals/invoice");
const Insta = require("../config/instaMojo");
module.exports = {
  payInvoice: async (req, res) => {
    try {
      let data = new Insta.PaymentData();

      data.purpose = "Test"; // REQUIRED
      data.amount = 9; // REQUIRED
      data.currency = "INR";
      data.buyer_name = "<buyer name>";
      data.email = "<buyer email>";
      data.webhook = "Your endpoint to capture POST data from a payment";
      data.setRedirectUrl(process.env.FRONTEND_URL);

      Insta.createPayment(data, function (error, response) {
        if (error) {
          // some error
        } else {
          // Payment redirection link at response.payment_request.longurl
          console.log(response);
        }
      });
      const allInvoices = await Invoice.find();
      return allInvoices;
    } catch (err) {
      console.error(err);
    }
  },
};
