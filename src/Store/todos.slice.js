import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




export const TODO_KEY = "todo";
// 异步函数方式一
// export const loadTodos = createAsyncThunk(`${TODO_KEY}/loadTodos`,
//   async (api,thunkAPI)=>{
//     const {data}  = await axios.get(api);
//     thunkAPI.dispatch(setTodos(data))
//   }
// )
// 异步函数方式二
export const loadTodos = createAsyncThunk(`${TODO_KEY}/loadTodos`,api => axios.get(api).then(res=>res.data));
export const todoSlice = createSlice({
  name:TODO_KEY,
  initialState:{
    todos:[]
  },
  reducers:{
    addTodo:{
      prepare(state){
        return {payload: {...state,...{cid:Math.random()}}}
      },
      reducer(state,action){
        state.todos.push(action.payload)
      }
    },
    setTodos(state,action){ 
      console.log('setTodos')
      state.todos.push(...action.payload)
    }
  },
  extraReducers:{
    [loadTodos.pending]:(state,action)=>{
      return state
    },
    [loadTodos.fulfilled]:(state,action)=>{
      state.todos.push(...action.payload)
    }
  }
})
// export function  selectTodos(state,action){
//   return state.todo.todos
// }

export const { setTodos, addTodo} = todoSlice.actions;
export default todoSlice.reducer