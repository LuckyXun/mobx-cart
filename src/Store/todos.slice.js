/*
 * @Author: XunL
 * @Date: 2021-10-28 00:05:28
 * @LastEditTime: 2021-10-28 00:39:11
 * @Description: file content
 */
import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
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
export const loadTodos = createAsyncThunk(`${TODO_KEY}/loadTodos`, api => axios.get(api).then(res => res.data));

const todoAdapter = createEntityAdapter({
  selectId: todo => todo.cid
})
const { selectAll } = todoAdapter.getSelectors();
export const selectTodos = createSelector(state => state[TODO_KEY], selectAll)


export const todoSlice = createSlice({
  name: TODO_KEY,
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo: {
      prepare(state) {
        return { payload: { ...state, ...{ cid: Math.random() } } }
      },
      reducer:todoAdapter.addOne
    },
    setTodos(state, action) {
      console.log('setTodos')
      // state.todos.push(...action.payload)

      todoAdapter.addMany(state, action.payload)

    }
  },
  extraReducers: {
    [loadTodos.pending]: (state, action) => {
      return state
    },
    [loadTodos.fulfilled]: (state, action) => {
      todoAdapter.addMany(state, action.payload)
    },
  }
})
// export function  selectTodos(state,action){
//   return state.todo.todos
// }

export const { setTodos, addTodo } = todoSlice.actions;
export default todoSlice.reducer