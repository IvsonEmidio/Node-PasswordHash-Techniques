import express from "express";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




try {
    app.listen(port, () => {
        console.log(`Successfully connected to port ${port}`)
    });
} catch (err) {
    console.error(`An error has occurred. ${err}`);
}