import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  navlink: {
    display: 'flex',
  },
  navlinks: {
    display: 'flex',
    marginTop: '7px',
  },
  nameLink: {
    marginBottom: '10px',
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    margin: '10px 0',
    textAlign: 'center',
  },
  section: {
    margin: '10px 0',
  },
  form: {
    maxWidth: '60%',
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
    transform: 'translateY(-8px)',
    fontSize: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
});

export default useStyles;
