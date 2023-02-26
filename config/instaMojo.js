let Insta = require("instamojo-nodejs");
Insta.setKeys(process.env.INSTAMOJO_API_KEY, process.env.INSTAMOJO_AUTH_KEY);
Insta.isSandboxMode(true);
module.exports = Insta;
