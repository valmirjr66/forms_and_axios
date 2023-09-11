import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  border: 1px solid lightgray;
  border-radius: 15px;
  flex-direction: column;
  padding: 10px 0px;
  align-items: center;
  justify-content: space-evenly;
  background-color: lightgray;
  animation: pulse 3s infinite;
  width: ${props => props.width || 350}px;
  height: ${props => props.height || 300}px;
  color: black;
  
  @keyframes pulse {
    0% {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 1);
    }
    50% {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0);
    }
    100% {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 1);
    }
  }
`;
