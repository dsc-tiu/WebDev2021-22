import styled from "styled-components";
import { StyledButton } from "./components/AddTodo/AddTodo.styles";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 3.2rem;

  h1 {
    font: 700 3.6rem var(--ff-raleway);
    text-align: center;
  }
`;

export const Main = styled.main`
  width: min(100%, 48rem);
  margin-top: 6rem;
  .deleteIcon {
    position: relative;
    top: 1.4px;
    bottom: 1.4px;
    margin-right: 0.2rem;
  }
`;
export const MainWrapper = styled.div`
  display: grid;
  justify-items: center;
`;

export const DeleteButton = styled(StyledButton)`
  padding: 1.2rem 2.6rem;
  border-radius: 4px;
  background-color: #eb5757;
  float:right;
`;

export const FallbackText = styled.p`
  font: 500 2.4rem var(--ff-montserrat);
  color:#333;
  text-align: center;
`

export const Footer = styled.footer`
  margin-top: auto;
  padding-top: 2.4rem;
`;

export const FooterText = styled.p`
  font: 1.4rem var(--ff-montserrat);
  color: #bdbdbd;
  text-align: center;
`;
