const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

let users = [
    {
        "name": "Store",
        "lastName": "Online",
        "username": "store",
        "password": "123456",
        "cart":[]
    },
    {
        "name": "Emanuel",
        "lastName": "Zuniga",
        "username": "ezuniga",
        "password": "123456",
        "cart":[
            {
                "sku":"eede4108-421c-4d7b-82a2-db4d6e078844",
                "qty":1
            },
            {
                "sku":"5f5eaeb8-9fa4-49ec-a8ad-1434cb9732ef",
                "qty":1
            },
            {
                "sku":"eb7dbfe4-263a-4a13-aeb1-8655c0f6c91a",
                "qty":1
            }
        ]
    },
    {
        "name": "John",
        "lastName": "Doe",
        "username": "jdoe",
        "password": "123456",
        "cart":[
            {
            "sku":"024f8ec0-193e-4897-8b3c-1b315691a3b5",
            "qty":3
            },
            {
                "sku":"1f59a280-ccca-45ba-82e1-11e83794e8f0",
                "qty":1
            },
            {
                "sku":"4fa3a03d-c326-4f9e-bc2c-f8e69aaba155",
                "qty":2
            }]
    }
];


app.get('/api/login/:username.:password', (req, res) => {

    let login = false;
    let user ='';

    for(let i = 0; i < users.length; i++) {
        if (users[i].username == req.params.username && users[i].password == req.params.password) {
            login = true;
            user = users[i];
            break;
        }
    }

    res.json({'login':login, 'user':user});

});


app.listen(8000);
console.log('Listening on http://localhost:8000');
