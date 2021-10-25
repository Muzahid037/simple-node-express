const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

const users =
    [
        {
            id: 0,
            name: "Babu",
            email: "m@gmail.com",
            phone: 0177000000000
        },
        {
            id: 1,
            name: "Bristy",
            email: "m@gmail.com",
            phone: 0177000000000
        },
        {
            id: 2,
            name: "Inaya",
            email: "m@gmail.com",
            phone: 0177000000000
        },
        {
            id: 3,
            name: "Mukit",
            email: "m@gmail.com",
            phone: 0177000000000
        }
    ]

// app.Method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    //const 
    //console.log("Hitting post", req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/', (req, res) => {
    res.send(" biday dunia")
})


app.get('/users', (req, res) => {
    const search = req.query.search
    console.log(search);
    if (search) {
        const searchedUser = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchedUser);
    }
    else {
        res.send(users);
    }
})

// dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.send(users[id])
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})