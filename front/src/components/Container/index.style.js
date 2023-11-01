import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  border: 1px solid lightgray;
  border-radius: 15px;
  flex-direction: column;
  padding: 10px 0px;
  align-items: center;
  justify-content: space-evenly;
  background-color: lightgray;
  width: ${(props) => props.width || 350}px;
`;
