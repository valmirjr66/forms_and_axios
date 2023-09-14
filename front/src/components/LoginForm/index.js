import { Box, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { insertUser } from '../../services';
import Container from '../Container';
import { countries } from './constants';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  const submitForm = () => {
    insertUser({ name, country },
      () => {
        toast.success('Usuário cadastrado');
        setName('');
        setCountry('');
      },
      (err) => toast.error(err.response?.data || "Erro na operação"));
  }

  return <Container>
    <Typography>Cadastre um usuário</Typography>
    <TextField
      id='name'
      label="Qual o nome?"
      sx={{ width: 300, display: 'flex' }}
      variant='standard'
      onChange={(event) => setName(event.target.value)}
      value={name}
    />
    <Autocomplete
      id="country-select"
      sx={{ width: 300 }}
      options={countries}
      getOptionLabel={(option) => option?.label || ''}
      onChange={(_, newValue) => setCountry(newValue)}
      value={country}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt={option.label}
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Qual o país de origem?"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password'
          }}
          variant='standard'
        />
      )}
    />
    <Button variant="contained" type='submit' onClick={submitForm} disabled={!name || !country}>
      Cadastrar
    </Button>
  </Container>;
}

export default LoginForm;