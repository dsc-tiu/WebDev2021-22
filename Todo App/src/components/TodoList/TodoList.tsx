import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { checkUncheck, deleteTodos } from "../../features/todo";
import { StyledUl, Wrapper } from "./TodoList.styles";
import { BiTrashAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const TodoList:React.FC = () => {
  const todo = useAppSelector((state) => state.todo.value);
  const dispatch = useAppDispatch();
  return (
    <StyledUl
      as={motion.ul}
      key={todo.selectedTab ? todo.selectedTab : "empty"}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.15 }}
    >
      {todo.todoList
        .filter(
          todo.selectedTab === "Active"
            ? (item) => item.status === false
            : todo.selectedTab === "Completed"
            ? (item) => item.status === true
            : () => true
        )
        .map((item) => (
          <li key={item.id}>
            <Wrapper>
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => dispatch(checkUncheck(item.id))}
              />
              <p className={item.status ? "strikedTodo" : ""}>{item.name}</p>
            </Wrapper>
            {todo.selectedTab === "Completed" && (
              <BiTrashAlt
                size={24}
                className="deleteIcon"
                onClick={() => dispatch(deleteTodos(item.id))}
              />
            )}
          </li>
        ))}
    </StyledUl>
  );
};

export default TodoList;
