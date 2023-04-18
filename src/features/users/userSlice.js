import { createSlice } from "@reduxjs/toolkit";

const initialState ={
 // name:["sanket","pooja","abdul"],
  task:[{id:1, name:"sanket",taskname:"Bill Payment"}]
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.task=[...state.task, action.payload];
    },
    editUser: (state, action) => {
      const { id, changetask } = action.payload;
      // const existingUser = state.find(user => user.id === id);
      // if(existingUser) {
      //   existingUser.name = name;
      //   existingUser.task = task;
      // }
      let obj = state.task.find(e => e.id == id)
      console.log(obj);
      obj.taskname = changetask
      console.log(changetask);
      console.log(action.payload);
      // state.task[id]=task;
      // console.log(state.task[id]);
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      // const existingUser = state.find(user => user.id === id);
      // if(existingUser) {
      //   return state.filter(user => user.id !== id);
      // }
      state.task=state.task.filter((ele)=> ele.id !== id
      )
    },
 
  }
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export const getTodoList = (state) => state.users.task;
export default userSlice.reducer;