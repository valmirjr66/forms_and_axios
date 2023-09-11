import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Paper } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useCallback, useEffect, useState } from "react";
import { deleteUser, listUsers } from "../../services";
import Container from "../Container";
import toast from 'react-hot-toast';

export default function Visualization() {
  const [users, setUsers] = useState([]);

  const fetchUser = () => {
    listUsers(({ data }) => {
      setUsers(data)
    }, err => console.error(err));
  }

  useEffect(fetchUser, []);

  const removeUser = useCallback((id) => {
    deleteUser(id, () => {
      toast.success('Usuário removido com sucesso');
      fetchUser();
    }, err => toast.error(err.response?.data || "Erro na operação"));
  }, []);

  const TabularView = useCallback(() => (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Nome</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>País</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.name}>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell>
                {user.country.label}
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${user.country.code.toLowerCase()}.png`}
                  alt={user.country.label}
                  style={{ marginLeft: 10 }}
                />
              </TableCell>
              <TableCell>
                <DeleteForeverIcon
                  color="error"
                  onClick={() => removeUser(user.id)}
                  sx={{ cursor: 'pointer', ':hover': { color: 'blue' } }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ), [users, removeUser]);

  return (
    <Container width={500} height={400}>
      {users.length === 0 ? "Nenhum usuário cadastrado" : <TabularView />}
    </Container>
  );
}