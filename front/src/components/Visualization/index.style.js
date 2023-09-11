import styled from "styled-components";

const Container = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  color: black;

  th, td {
    padding: 12px 15px;
  }
`;

const THead = styled.thead`
  tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
`;

const TBody = styled.tbody`
  > tr {
    border-bottom: 1px solid #dddddd;
  }

  > tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  tr.active-row {
    font-weight: bold;
    color: #009879;
  }
`;

export const StyledTable = {
  Container,
  THead,
  TBody
};