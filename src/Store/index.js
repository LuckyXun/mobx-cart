import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './todos.slice'


export default configureStore({
  reducer:{
    todo:todoSlice
  }
})