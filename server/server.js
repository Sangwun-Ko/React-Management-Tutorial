const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    const home = { title: 'Express API Data'};
    res.json(home);
})

app.post('/gogo',(req, res) => {
    const name = req.body.name;
    console.log(name);

})

app.listen(4000, function () {
  console.log('listening on 4000')
}); 