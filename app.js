const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())


const Ajv = require('ajv')
const ajv = new Ajv()
const usersSchema = require('./users.json')
const validate = ajv.compile(usersSchema)
const testUser = require('./testUser.json')


app.get('/', (req,res) => res.send(validate(req.body)))


