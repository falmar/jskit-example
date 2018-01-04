import express from 'express'
import bodyParser from 'body-parser'

import DataLayer from './todo'
import Service from './service'
import Logger from './logger'

import { saveTodoEndpoint } from './endpoint'
import { decodeSaveTodoRequest, encodeSaveTodoResponse } from './transport'

import { NewServer } from './kit/http/server'

let service = new Service(new DataLayer())
service = new Logger(service)

const saveTodo = NewServer(
  saveTodoEndpoint(service),
  decodeSaveTodoRequest,
  encodeSaveTodoResponse
)

const app = express()

app.use(bodyParser.json())

app.post('/todos', saveTodo)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
