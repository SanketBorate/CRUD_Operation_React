import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/userSlice';
import completedTask from './features/users/CompletedTaskSlice'

export const store = configureStore({
  reducer: {
   users: usersReducer ,
   completedTask: completedTask,
  },
})