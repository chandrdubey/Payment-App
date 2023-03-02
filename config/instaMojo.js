let Insta = require("instamojo-payment-nodejs");
Insta.isSandboxMode(true); // For testing
Insta.setKeys(process.env.INSTAMOJO_API_KEY, process.env.INSTAMOJO_AUTH_KEY);

module.exports = Insta;
