const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000


app.use((req, res, next) => {
    res.status(200).send(`
    <h1>Hello World from Abbas!</h1>
    <h1>يا رب فك الضيقه</h1>
    <h1>1/3/2025 يا رب </h1>
    `);
});

app.listen(PORT);