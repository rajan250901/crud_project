const express = require('express')
const app = express()
const db = require('./queries')
const port = 3000

const bodyParser = require('body-parser');

app.use((req, res, next) => {
    bodyParser.json()(req, res, err => {
        if (err) {
            console.error(err);
            return res.sendStatus(400); // Bad request
        }

        next();
    });
});
app.get('/', (request, response) => 
{
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id',db.updateUser)
app.delete('/users/:id',db.deleteUser)
app.get('/users',(req,res) =>{
  res.json({
    message:"hello Rajan"})
    console.log("working fine");
  })
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})