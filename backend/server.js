import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req , res) => {
    res.send(data.products);
})

app.listen(5100, () => {console.log("server started at http://localhost/5000") });