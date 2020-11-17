let express = require('express');
const path = require('path');
let app = express();

const port = process.env.port || 5000;

let app_path = '../dist/spacex-data-visualizer';

app.use('/', express.static(path.join(__dirname, app_path)))
    .listen(port, () => console.log(`listening on ${port}`));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, app_path + './index.html'))
})