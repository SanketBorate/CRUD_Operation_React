import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completedTaskList: [],
};

const CompletedTaskSlice = createSlice({
  name: "completedTask",
  initialState: initialState,
  reducers: {
    setCompeletedTaskList: (state, action) => {
      state.completedTaskList = [...state.completedTaskList, action.payload];
    },
    clearCompletedTaskList: (state) => {
      state.completedTaskList = [];
    },
  },
});

export const { setCompeletedTaskList ,clearCompletedTaskList } = CompletedTaskSlice.actions;

export const getCompeletedTaskList = (state) =>
  state.completedTask.CompletedTaskList;

export default CompletedTaskSlice.reducer;