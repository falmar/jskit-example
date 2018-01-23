import express from 'express'
import bodyParser from 'body-parser'

import DataLayer from './todo'
import Service from './service'
import Logger from './logger'

import { indexTodoEnpoint, loadTodoEnpoint, saveTodoEndpoint, updateTodoEndpoint, deleteTodoEndpoint } from './endpoint'
import {
  decodeIndexTodoRequest,
  encodeIndexTodoResponse,
  decodeLoadTodoRequest,
  encodeLoadTodoResponse,
  decodeSaveTodoRequest,
  encodeSaveTodoResponse,
  decodeUpdateTodoRequest,
  encodeUpdateTodoResponse,
  encodeDeleteTodoResponse,
  decodeDeleteTodoRequest
} from './transport'

import { NewServer as HTTPServer } from './kit/http/server'

let service = new Service(new DataLayer())
service = new Logger(service)

const indexTodo = HTTPServer(
  indexTodoEnpoint(service),
  decodeIndexTodoRequest,
  encodeIndexTodoResponse
)

const loadTodo = HTTPServer(
  loadTodoEnpoint(service),
  decodeLoadTodoRequest,
  encodeLoadTodoResponse
)

const saveTodo = HTTPServer(
  saveTodoEndpoint(service),
  decodeSaveTodoRequest,
  encodeSaveTodoResponse
)

const updateTodo = HTTPServer(
  updateTodoEndpoint(service),
  decodeUpdateTodoRequest,
  encodeUpdateTodoResponse
)

const deleteTodo = HTTPServer(
  deleteTodoEndpoint(service),
  encodeDeleteTodoResponse,
  decodeDeleteTodoRequest
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
