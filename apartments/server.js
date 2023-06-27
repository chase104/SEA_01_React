const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "/build")));
// app.get('/', (req, res) => {
//     res.send("some text")
// })

app.listen(4001, () => {
    console.log('listening on 4001')
})