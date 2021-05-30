const express = require("express");
const listEndpoints = require("express-list-endpoints");
const port = process.env.PORT;
const cors = require("cors");
const server = express();
const {
    join
} = require("path");

server.use(cors());
const staticFolderPath = join(__dirname, "../public");
console.log(staticFolderPath);
server.use(express.static(staticFolderPath));
server.use(express.json());
console.log(listEndpoints(server));
console.log(port)
server.listen(port, () => {
    console.log(`server is running on ${port}`);
});