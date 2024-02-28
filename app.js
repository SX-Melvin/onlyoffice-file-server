import express from "express";

const app = express();

app.use(express.static('files'));

app.listen(3000, () => {
    console.log("Server ready");
});