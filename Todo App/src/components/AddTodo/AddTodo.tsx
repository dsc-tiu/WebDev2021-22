import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Container, StyledButton, TodoInput } from "./AddTodo.styles";
import { todoInputChangeHandler, addTodos } from "../../features/todo";

const AddTodo:React.FC = () => {
  const todo = useAppSelector((state) => state.todo.value);
  const dispatch = useAppDispatch();
  return (
    <Container>
      <TodoInput
        placeholder="add todo"
        value={todo.todoInput}
        onChange={(e) => dispatch(todoInputChangeHandler(e.target.value))}
        onKeyPress={(e) =>
          e.key === "Enter" && dispatch(addTodos(todo.todoInput))
        }
      />
      <StyledButton onClick={() => dispatch(addTodos(todo.todoInput))}>
        Add
      </StyledButton>
    </Container>
  );
};

export default AddTodo;
