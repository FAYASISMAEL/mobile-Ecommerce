import express from "express";
import connection from "./connection.js";
import path, { dirname,join } from 'path';
import url from "url";

import mobile_routes from "./router/mobile.routes.js";

const app = express();

const file_name = url.fileURLToPath(import.meta.url);
let __dirname = dirname(file_name);
let FrontEnd = path.join(__dirname,"..","Front-End");

app.use(express.static(FrontEnd));
app.use(express.json({limit:"50mb"}));

app.use('/api',mobile_routes);

const port = 3003;
connection().then(() => {
    app.listen(port,() => {
        console.log("server is running @http://localhost:3003");
    });
});