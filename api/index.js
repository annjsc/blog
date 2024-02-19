const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://annelisescol:bn4s7x5QHR9VvvFQ@cluster0.rsmsit4.mongodb.net/?retryWrites=true&w=majority');

app.get('/', function (req, res) {
  res.json('Yes'); 
});

app.post('/register', (req, res) => {
  const {username, password} = req.body;
  res.json({requestData:{username, password}});
})

app.listen(4001); 
//mongodb+srv://annelisescol:bn4s7x5QHR9VvvFQ@cluster0.rsmsit4.mongodb.net/?retryWrites=true&w=majority