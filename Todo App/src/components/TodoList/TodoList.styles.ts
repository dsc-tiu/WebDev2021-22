import styled from "styled-components";

export const StyledUl = styled.ul`
  margin-top: 3.3rem;
  padding-inline:1rem;
  font: 500 1.8rem var(--ff-montserrat);
  li {
    list-style: none;
    display: flex;
    gap:0.5rem;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  input[type="checkbox"] {
    transform: scale(1.5);
    accent-color: var(--clr-primary);
  }
  p{
    word-break: break-word;
  }
  .strikedTodo {
    text-decoration: line-through;
  }

  .deleteIcon {
    color: #bdbdbd;
    flex:1;
    align-self: center;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex:9;
`;
