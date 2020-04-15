import { Container, CssBaseline } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CopyrightIcon from '@material-ui/icons/Copyright';
import MenuIcon from '@material-ui/icons/Menu';
import { CollapseBtn, Content, Footer, Header, Root, Sidebar, SidebarTrigger } from '@mui-treasury/layout';
import React from "react";
import AcnLogo from '../img/Acc_Technology_Lockup_WHT.svg';
import Admin from './Admin';
import config from './layout.json';
import Search from './Search';
import NavBar from './NavBar';
import theme from "./theme";

const useStyles = makeStyles(() => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  footer: {
    textAlign: 'center',
    height: '48px',
    position: 'fixed',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  collapseBtn: {
    //backgroundColor: palette.grey[50],
    textAlign: 'center',
    borderRadius: 0,
    borderTop: '1px solid',
    borderColor: theme.palette.action.hover,
    [theme.breakpoints.up('sm')]: {
      minHeight: 40
    }
  }
}));

export default ({ children }) => {
  const classes = useStyles({ theme });
  return (
    <Root theme={theme} config={config}>
      {({ sidebarStyles, headerStyles, collapsed, opened }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                {opened ? <ChevronLeftIcon /> : <MenuIcon />}
              </SidebarTrigger>
              <Typography className={classes.title} variant="h6" noWrap>
                Infrastructure
              </Typography>
              <Search />
              <Admin />
            </Toolbar>
          </Header>
          <Sidebar>
            <NavBar />
            <CollapseBtn className={classes.collapseBtn}>
              {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </CollapseBtn>
          </Sidebar>
          <Content style={{ marginBottom: '48px' }}>
            <Container>
              {children}
            </Container>
          </Content>
          <Footer className={classes.footer} >
            <CopyrightIcon /> <img src={AcnLogo} height='24px' align='bottom' alt="Accenture Technology" ></img>
          </Footer>
        </>
      )}
    </Root>
  );
};