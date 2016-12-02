const express = require('express');
const app = express();
const cors = require('cors');

let bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded




let users = [
    {
        "name": "Store",
        "lastName": "Online",
        "username": "store",
        "password": "123456"
    },
    {
        "name": "Emanuel",
        "lastName": "Zuniga",
        "username": "ezuniga",
        "password": "123456"
    },
    {
        "name": "John",
        "lastName": "Doe",
        "username": "jdoe",
        "password": "123456"
    }
];


app.post('/api/login', (req, res) => {

    let login = false;
    let user ='';

    for(let i = 0; i < users.length; i++) {
        if (users[i].username == req.body.username && users[i].password == req.body.password) {
            login = true;
            user = users[i];
            break;
        }
    }

    res.json({'login':login, 'user':user});

});



app.listen(8000);
console.log('Listening on http://localhost:8000');
