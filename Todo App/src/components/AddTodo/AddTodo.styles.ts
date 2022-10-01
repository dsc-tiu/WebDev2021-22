import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: center;
  margin-block: 1.8rem;
`;

export const TodoInput = styled.input`
  padding:2rem 1.2rem;
  border-radius: 12px;
  width: 100%;
  border: 1px solid grey;
  accent-color: var(--clr-primary);
  font-family: var(--ff-montserrat);
  font-weight: 400;
 
  &:focus {
    border-color: transparent;
  }
`;

export const StyledButton = styled.button`
  background-color: ${props => props.color || "var(--clr-primary)"};
  border: none;
  padding: 2rem 4rem;
  border-radius: 12px;
  color: white;
  font: 600 1.4rem var(--ff-montserrat);
  transition: transform ease-out 0.15s;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`;
