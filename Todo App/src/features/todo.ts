import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const tabsList: Array<string> = ["All", "Active", "Completed"];

interface Todo {
  id: string;
  name: string;
  status: boolean;
}

interface TodoState {
  value: {
    selectedTab: string;
    todoList: Todo[];
    todoInput: string;
  };
}

const initialState: TodoState = {
  value: {
    selectedTab: tabsList[0],
    todoList: [
      { id: uuidv4(), name: "Eat", status: false },
      { id: uuidv4(), name: "Sleep", status: false },
      { id: uuidv4(), name: "Code", status: true },
      { id: uuidv4(), name: "Repeat", status: false },
    ],
    todoInput: "",
  },
};

const todoSLice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    switchTab: (state, action: PayloadAction<string>) => {
      state.value.selectedTab = action.payload;
    },
    checkUncheck: (state, action: PayloadAction<string>) => {
      // @ts-ignore: Object is possibly 'undefined'.
      state.value.todoList.find(
        (todo: Todo) => todo.id === action.payload
      ).status = !state.value.todoList.find(
        (todo: Todo) => todo.id === action.payload
      )?.status;
    },
    todoInputChangeHandler: (state, action: PayloadAction<string>) => {
      state.value.todoInput = action.payload;
    },
    addTodos: (state, action: PayloadAction<string>) => {
      state.value.todoInput &&
        state.value.todoList.push({
          id: uuidv4(),
          name: action.payload,
          status: false,
        });
      state.value.todoInput = "";
    },
    deleteTodos: (state, action: PayloadAction<string>) => {
      state.value.todoList = state.value.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    deleteAllTodos: (state) => {
      state.value.todoList = [];
    },
  },
});

export const {
  switchTab,
  checkUncheck,
  todoInputChangeHandler,
  addTodos,
  deleteTodos,
  deleteAllTodos,
} = todoSLice.actions;

export default todoSLice.reducer;
