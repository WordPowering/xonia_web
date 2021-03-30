const express = require("express")
const app = express()
const port = 69
app.all('*', function(req, res) {
    res.send("No")
  });
app.listen(port,() => {
    console.log(`App listening at http://localhost:${port}`)
})