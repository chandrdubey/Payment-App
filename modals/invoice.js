var mongoose = require("mongoose");

//Schema
var invoiceSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  items: {
    type: Number,
  },

  total_amount: {
    type: Number,
  },

  status: {
    type: String,
  },
  email: {
    type: String,
  },
  gatewayPaymentId: {
    type: String,
    default: null,
  },
  paymentAt: {
    type: String,
    default: null,
  },
  paymentFee: {
    type: Number,
    default: null,
  },
});
module.exports = mongoose.model("Invoice", invoiceSchema);
