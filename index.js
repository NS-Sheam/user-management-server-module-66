const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

app.use(express.json())

const users = [
    {
        id: 1,
        name: "Nazmus",
        email: "nazmus@gamil.com"
    },
    {
        id: 2,
        name: "Sakib",
        email: "sakib@gamil.com"
    },
    {
        id: 3,
        name: "Sheam",
        email: "sheam@gamil.com"
    },
]

app.get("/", (req, res) => {
    res.send("User Management system is running");
})

app.get("/users", (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log("post api is hitting");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})