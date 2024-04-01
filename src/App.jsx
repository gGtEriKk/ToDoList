// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { v4 as uuid } from "uuid"

import { FcTodoList, FcCancel } from 'react-icons/fc'

import {
  Container,
  Input,
  ToDoList,
  Button,
  ListItem,
  Check,
  Trash,
  EmptyListItem
} from './styles.js'

function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')
  // "Tomar banho", "Estudar react", "Assistir aulas"

  function digiteiAlgo(event) {
    setInputTask(event.target.value)
  }

  function cliquei() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function finishedTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
  }

  function deleteTask(id) {
    const filteredTasks = list.filter(item => (
      item.id !== id
    ))
    setList(filteredTasks)
  }

  return (
    <>
      <Container>
        <ToDoList>
          <div className='inputDiv'>
            <FcTodoList size={40} />
            <Input className='inputStyle' onChange={digiteiAlgo} placeholder='Tarefa a ser realizada...' />
            <Button onClick={cliquei}>Adicionar</Button>
          </div>
          <ul>
            {list.length > 0 ? (
              list.map(item => (
                <ListItem key={item.id} $isFinished={item.finished}>
                  <Check onClick={() => finishedTask(item.id)} cursor={'pointer'} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteTask(item.id)} cursor={'pointer'} />
                </ListItem>
              ))
            ) : (
              <>
                <EmptyListItem>
                  <FcCancel size={40} />
                  <h1>Não há tarefas aqui...</h1>
                </EmptyListItem>
              </>
            )}
          </ul>
        </ToDoList>
      </Container>
    </>

  )
}

export default App
