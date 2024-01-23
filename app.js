const express = require('express')
const app = express()
const port = 3000
let booklog = {}

// middleware that makes this server only parse and accept json data
app.use(express.json())

// POST handler - handles post requests to the 'booklog' URI
// meant for setting data on your server
app.post('/booklog', (req, res) => {
    console.log("received post!", req.body);
    booklog = req.body

    if (!(booklog.name && booklog.text)) {
        return res.json({
            "ok": false,
            'error': "invalid parameter"
        })
    }

    res.json({
        "ok": true,
        "booklog" : booklog
    })
})

// GET handler - for get requests to the 'booklog' URI
// meant for getting data from your server
app.get("/booklog", (req, res) => {
    res.json({
        "ok" : true,
        "booklog": [
            booklog
        ]
    })
})

// this makes your app listen for requests on the given port (3000 is a common default).
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})