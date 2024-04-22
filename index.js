const express = require('express')
const app = express();
const port = 3000;

app.listen(port, () =>{
  console.log('server listening on port: ' + port)
})

app.get('/',function(req,res){
  res.send("hello express");
})

app.get('/express',function(req,res){
 res.send('creating rout with express is simple');
})

app.get('/user', function(req,res){
  res.send('receive a get request for user');
})

app.post('/user', function(req,res){
  res.send('receive a post request for user');
})

// params in express

app.get("/user/:userID", (req, res) => {
  res.send(`Navigated to the user page for: ${req.params.userID}.`);
});

app.get("/user/:userID/profile", (req, res) => {
  res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
});

app.get("/user/:userID/profile/:data", (req, res) => {
  res.send(
    `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
  );
});