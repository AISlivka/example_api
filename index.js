const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;

app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);

// Add this line to serve our index.html page
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/upload', (req, res) => {

    // Get the file that was set to our field named "image"
    const { image } = req.files;

    console.log(req.files.image);

    // If no image submitted, exit
    if (!image) return res.sendStatus(400);

    // Move the uploaded image to our upload folder
    image.mv(__dirname + '/upload/' + image.name);

    // All good
    res.sendStatus(200);
});


app.post('/form-content', (req, res) => {
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
})

app.post('/form-json', (req, res) => {
    if (req.headers['content-type'] === 'application/json') {
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});