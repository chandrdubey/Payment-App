const Invoice = require("../modals/invoice");
const Insta = require("../config/instaMojo");
module.exports = {
  getAllInvoices: async () => {
    try {
      const allInvoices = await Invoice.find({});
      console.log(allInvoices);
      return allInvoices;
    } catch (err) {
      console.error(err);
    }
  },
};
