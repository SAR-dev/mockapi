const express = require("express");
const jsonfile = require('jsonfile')

const app = express()

const port = 3000

const file = './db/database.json'

app.get("/v1/users", (req, res) => {
    jsonfile.readFile(file)
        .then(obj => res.json(obj))
        .catch(error => res.json({ "error": error }))
})

app.get("/v1/salons/:salonCode/users/:userId", (req, res) => {
    const { salonCode, userId } = req.params

    jsonfile.readFile(file)
        .then(obj => {
            const result = obj.users.find(el => el.salonCode === parseInt(salonCode) && el.userId === parseInt(userId))
            res.json(result)
        })
        .catch(error => res.json({ "error": error }))
})

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}/`);
})