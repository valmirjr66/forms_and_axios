import {
  ContentCopy,
  ContentPaste,
  Logout,
  Person,
  Menu as MenuIcon
} from '@mui/icons-material';
import {
  AppBar,
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

  const stringToTextFragments = (str) => str.split('')
    .map((char, i) => <AnimatedTitle.Fragment style={{ "--index": i }}>{char}</AnimatedTitle.Fragment>)

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Drawer open={menuIsOpen} onClose={() => setMenuIsOpen(false)}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
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
              {stringToTextFragments("Café Soviet")}
            </AnimatedTitle.Box>
            <Button variant='outlined' color="inherit" href='signin'>
              <Person sx={{ marginRight: 1 }} />
              Entrar
            </Button>
          </Toolbar>
        </AppBar>

        <Toaster />

        {children}
      </Wrapper>
    </ThemeProvider>
  );
}
