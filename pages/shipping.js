import {
  Button,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from '@material-ui/core';
import { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import { Store } from '../utils/store';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import NextLink from 'next/link';

export default function Shipping() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { redirect } = router.query;
  const { userInfo } = state;
  useEffect(() => {
    if (!userInfo) {
      router.push('/login?redirect=/shipping');
    }
  }, []);

  const classes = useStyles();

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set('shippingAddress', {
      fullName,
      address,
      city,
      postalCode,
      country,
    });
    router.push('/payment');
  };

  return (
    <Layout title="Shipping">
      <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
        <Typography component="h1" variant="h1">
          Shipping
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 5,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="fullName"
                  label="Full name"
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.name
                      ? errors.name.type === 'minLength'
                        ? 'Full name must be at least 2 caracter long'
                        : 'Full name is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Continue
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
