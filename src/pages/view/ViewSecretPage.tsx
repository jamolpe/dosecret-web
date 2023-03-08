import { Box, CircularProgress, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { loadSecret } from '../../store/reducers/secret/secret-actions';
import { secretSelector } from '../../store/reducers/secret/secret-reducer';
import { URLS } from '../../utils/constants';
import NotValid from './NotValid';
import SecretInfo from './SecretInfo';

const ViewSecretPage = () => {
  const { uuid } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, secret } = useSelector(secretSelector);

  useEffect(() => {
    if (uuid) {
      dispatch(loadSecret(uuid));
    }
    if (!uuid) {
      return navigate(URLS.NOT_FOUND);
    }
  }, []);

  const getCorrespondingItem = () => {
    if (loading) {
      return (
        <Box
          style={{
            width: '100%',
            alignItems: 'center',
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'column',
            marginBottom: '20px'
          }}
        >
          <CircularProgress size={200} />
        </Box>
      );
    }

    if (secret) {
      return <SecretInfo secret={secret} />;
    }
    return <NotValid uuid={uuid} />;
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <h1>View Secret</h1>
      </Grid>
      <Grid
        xs={12}
        item
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          style={{
            width: '100%',
            padding: 10,
            maxWidth: '1000px'
          }}
        >
          {getCorrespondingItem()}
        </Box>
      </Grid>
    </Grid>
  );
};
export default ViewSecretPage;
