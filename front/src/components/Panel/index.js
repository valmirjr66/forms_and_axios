import {
  Chat,
  LocalGroceryStore,
  Logout,
  Menu as MenuIcon,
  Person
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  ThemeProvider,
  Toolbar,
  createTheme
} from "@mui/material";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { AnimatedTitle, Wrapper } from "./index.style";

export default function Panel({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#6F4E37'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Drawer open={menuIsOpen} onClose={() => setMenuIsOpen(false)}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <LocalGroceryStore fontSize="small" />
              </ListItemIcon>
              <ListItemText>Carrinho</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Chat fontSize="small" />
              </ListItemIcon>
              <ListItemText>Ajuda</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText>Sair</ListItemText>
            </MenuItem>
          </MenuList>
        </Drawer>

        <AppBar sx={{ height: 90 }} position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setMenuIsOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <AnimatedTitle.Box as='a' href='/'>
              {
                "Café Soviet".split('').map((char, i) =>
                  <AnimatedTitle.Fragment style={{ "--index": i }}>
                    {char}
                  </AnimatedTitle.Fragment>)
              }
            </AnimatedTitle.Box>
            <Button variant='outlined' color="inherit" href='cadastro'>
              <Person sx={{ marginRight: 1 }} />
              Entrar
            </Button>
          </Toolbar>
        </AppBar>

        <Toaster />

        <Box sx={{ marginTop: 30, height: '100vh' }}>
          {children}
        </Box>
      </Wrapper>
    </ThemeProvider>
  );
}
