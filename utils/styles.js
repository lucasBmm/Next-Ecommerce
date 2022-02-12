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
});

export default useStyles;
