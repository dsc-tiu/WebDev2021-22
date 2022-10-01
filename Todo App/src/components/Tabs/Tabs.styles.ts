import styled from "styled-components";

export const TabsContainer = styled.ul`
  border-bottom: 1px solid #bdbdbd;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  li {
    font: 600 1.4rem var(--ff-montserrat);
    color: #333;
    list-style: none;
    position: relative;
    cursor: pointer;
    padding-bottom: 1.4rem;
    text-align: center;
  }
`;

export const UnderlinedDiv = styled.div`
  position: absolute;
  bottom: -1px;
  left: 15%;
  right: 0;
  height: 5px;
  background: var(--clr-primary);
  border-radius: 4px 4px 0px 0px;
  width: max-content;
  width: 70%;
`;
