/*
 * @Author: XunL
 * @Date: 2021-10-28 00:05:28
 * @LastEditTime: 2021-10-28 00:20:47
 * @Description: file content
 */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import todoSlice from './todos.slice'


export default configureStore({
  middleware: [...getDefaultMiddleware()],
  reducer: {
    todo: todoSlice
  }
})