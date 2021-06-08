let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.json({ sucess: true });
});

app.get("/cor/:pessoa", (req, res) => {
    let pessoa = req.params.pessoa;

    if (pessoa == "roberto") {
        res.json({ cor: "azul" });
    }
});

module.exports = app;
