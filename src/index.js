import express from 'express'
import bodyParser from 'body-parser'

import DataLayer from './arrayLayer'
import Service from './service'
import Logger from './logger'

import * as Endpoints from './endpoint'
import * as Transports from './transport'

import { NewServer as HTTPServer } from './kit/http'

let service = new Service(new DataLayer())
service = new Logger(service, console)

const indexTodo = HTTPServer(
  Endpoints.indexTodoEnpoint(service),
  Transports.decodeIndexTodoRequest,
  Transports.encodeIndexTodoResponse
)

const loadTodo = HTTPServer(
  Endpoints.loadTodoEnpoint(service),
  Transports.decodeLoadTodoRequest,
  Transports.encodeLoadTodoResponse
)

const saveTodo = HTTPServer(
  Endpoints.saveTodoEndpoint(service),
  Transports.decodeSaveTodoRequest,
  Transports.encodeSaveTodoResponse
)

const updateTodo = HTTPServer(
  Endpoints.updateTodoEndpoint(service),
  Transports.decodeUpdateTodoRequest,
  Transports.encodeUpdateTodoResponse
)

const deleteTodo = HTTPServer(
  Endpoints.deleteTodoEndpoint(service),
  Transports.decodeDeleteTodoRequest,
  Transports.encodeDeleteTodoResponse
)

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/todos', indexTodo)
app.post('/todos', saveTodo)
app.get('/todos/:id', loadTodo)
app.put('/todos/:id', updateTodo)
app.delete('/todos/:id', deleteTodo)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
