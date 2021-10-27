/*
 * @Author: XunL
 * @Date: 2021-10-28 00:05:28
 * @LastEditTime: 2021-10-28 00:36:12
 * @Description: file content
 */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import { addTodo, loadTodos,selectTodos } from "../../Store/todos.slice"
import { useEffect } from "react"

function Main() {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  useEffect(() => {
    dispatch(loadTodos("http://localhost:3001/todos"))
  },[])
  console.log(todos)
  return (
    <section className="main">
      <button onClick={() => dispatch(addTodo({ title: "测试任务" }))}>
        添加任务
      </button>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.cid}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{todo.title}</label>
              <button className="destroy" />
            </div>
            <input className="edit" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Main