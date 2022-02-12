import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Next E-commerce</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div className={classes.navlink}>
            <NextLink href="/cart" passHref>
              <Link>
                <Typography>Cart</Typography>
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>
                <Typography>Login</Typography>
              </Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. E-Commerce.</Typography>
      </footer>
    </div>
  );
}
