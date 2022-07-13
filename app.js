// create an express app
const express = require("express")
const app = express()
const url = require("url")

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
  var q = url.parse(req,true)
  res.send(q.pathname)
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));