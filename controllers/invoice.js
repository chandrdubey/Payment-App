const invoiceService = require("../services/invoice");

module.exports = {
  getAllInvoices: async (req, res) => {
    try {
      console.log("hellow");

      const allInvoices = await invoiceService.getAllInvoices();
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
