import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { Get, GetLimit } from '../config/ApiBase/ApiBase'
import { Spin } from 'antd'
import { Button } from '@mui/material'
import Popup from '../component/Popup'
import { saveAs } from 'file-saver';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, removeTodo } from '../config/redux/reducer/todoSlice'


const Home = () => {

  // const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [upload, setupload] = useState(false)
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todo.todos)

  useEffect(() => {
    console.log(todo)
  }, [])

  // const getData = () => {
  //   GetLimit("todolist").then((res) => {
  //     setData(res.data.result)
  //   }).catch((e) => console.log(e))
  // }

  const exportFile = () => {
    Get("todolist/download-Todos")
      .then(response => {
        if (response.status === 200) {
          const blob = new Blob([response.data], { type: 'application/octet-stream' });
          saveAs(blob, 'Todo-Task.csv');
        } else {
          throw new Error('Failed to download file');
        }
      })
      .catch(error => console.error('Error downloading file:', error));
  }

  const handleUpload = () => {
    setupload(true)
    setOpen(true)
  }
  const addTask = () => {
    if (index) {
      dispatch(editTodo({ text, index }))
      setIndex(0)
    } else {
      dispatch(addTodo(text))
    }
    setText("")
  }

  const handleDelete = (e) => {
    dispatch(removeTodo(e))
  }

  const handleEdit = (e) => {
    // dispatch(editTodo(e))
    setText(e.task)
    setIndex(e.id)
  }

  return (
    <>
      <Navbar />
      <div className='d-flex justify-content-end mx-5 mt-5'>
        <Button onClick={handleUpload} style={{ textTransform: 'capitalize' }} className="px-4" variant='contained' color='primary'>Import</Button>
        <Button onClick={() => setOpen(true)} style={{ textTransform: 'capitalize' }} className='mx-2 px-4' variant='contained' color='success'>Export</Button>
      </div>
      <div className=''>
        <div className='text-center'>
          <input value={text} className='input' onChange={(e) => setText(e.target.value)} type='text' placeholder='Enter the Todo' />
          <Button onClick={addTask} style={{ textTransform: 'capitalize' }} variant='contained' color="primary" className='mb-2 px-3'>+Add</Button>
        </div>
        <div className="listDiv" >
          <ol>
            {todo?.map((todo, i) => (
              <li className="mb-1 py-1 list" key={i}>{todo.task} <span className="mx-4 spans" >Start Data : {new Date(todo.createdAt).toLocaleDateString()}</span>
                <Button onClick={() => handleDelete(todo.id)} style={{ textTransform: 'capitalize' }} variant='contained' color="error">x</Button>
                <Button onClick={() => handleEdit(todo)} style={{ textTransform: 'capitalize' }} variant='contained' color="success">Edit</Button>
              </li>
            ))}
          </ol>

          <Popup unUpload={(e) => setupload(!e)} state={exportFile} upload={upload} open={open} closed={(e) => setOpen(e)} />
        </div>
      </div>
      {/* <br />
      <br />
      <br />
      <br />
      <div className=' mt-5 pt-5'>
        <div className="listDiv" >
          {data?.length === 0 ? <Spin></Spin> :
            <ol>
              {data?.map((todo, i) => (
                <li className="mb-1 py-1 list" key={i}>{todo.task} <span className="mx-2 span" >Start Data : {new Date(todo.createdAt).toLocaleDateString()}</span> </li>
              ))}
            </ol>
          }
          <Popup unUpload={(e) => setupload(!e)} state={exportFile} upload={upload} open={open} closed={(e) => setOpen(e)} />
        </div>
      </div> */}
    </>
  )
}

export default Home
