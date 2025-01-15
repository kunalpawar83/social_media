const http = require("http");
const app = require("./app.js");
const connectDB = require("./utils/connectDB");
require("dotenv").config();
const port = process.env.PORT || 3000;

const server = http.createServer(app);

connectDB().then(() => {
  server.listen(port, () => {});
});
