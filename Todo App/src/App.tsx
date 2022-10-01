import {
  AppWrapper,
  DeleteButton,
  Main,
  MainWrapper,
  FallbackText,
  Footer,
  FooterText,
} from "./App.styles";
import AddTodo from "./components/AddTodo/AddTodo";
import Tabs from "./components/Tabs/Tabs";
import TodoList from "./components/TodoList/TodoList";
import GlobalStyles from "./GlobalStyles";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { BiTrashAlt } from "react-icons/bi";
import { deleteAllTodos } from "./features/todo";

function App() {
  const todo = useAppSelector((state) => state.todo.value);
  const dispatch = useAppDispatch();
  const displayMessage = (selectedTab: string): string => {
    if (todo.todoList.length === 0) {
      return "No Todos Found";
    } else if (
      todo.todoList.filter((todo) => todo.status === false).length === 0 &&
      selectedTab === "Active"
    ) {
      return "No Active Todos Found";
    } else if (
      todo.todoList.filter((todo) => todo.status === true).length === 0 &&
      selectedTab === "Completed"
    ) {
      return "No Completed Todos Found";
    }
    return "";
  };
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <h1>#todo</h1>
        <MainWrapper>
          <Main>
            <Tabs />
            {(todo.selectedTab === "All" || todo.selectedTab === "Active") && (
              <AddTodo />
            )}
            <TodoList />
            {todo.selectedTab === "Completed" &&
              todo.todoList.filter((item) => item.status === true).length !==
                0 && (
                <DeleteButton onClick={() => dispatch(deleteAllTodos())}>
                  <BiTrashAlt className="deleteIcon" size={14} />
                  Delete All
                </DeleteButton>
              )}
            <FallbackText>{displayMessage(todo.selectedTab)}</FallbackText>
          </Main>
        </MainWrapper>
        <Footer>
          <FooterText>
            Created by{" "}
            <b>
              <u>Manthan Kuber</u>
            </b>
          </FooterText>
        </Footer>
      </AppWrapper>
    </>
  );
}

export default App;
