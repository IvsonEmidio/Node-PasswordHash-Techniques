import express from "express";
import bCryptRoutes from "./routes/bCryptRoutes";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
bCryptRoutes(app);

try {
    app.listen(port, () => {
        console.log(`Successfully connected to port ${port}`)
    });
} catch (err) {
    console.error(`An error has occurred. ${err}`);
}