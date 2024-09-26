import express from 'express';

const app = express();

app.use('/', (req, res) => {
    res.send("<p>Hello World</p>");
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
