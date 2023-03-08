import { Box, Button, CircularProgress, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { loadSecret } from '../../store/reducers/secret/secret-actions';
import { secretSelector } from '../../store/reducers/secret/secret-reducer';
import { URLS } from '../../utils/constants';
import OwnerInfo from './AdminInfo';
import NotValid from './NotValid';
import SecretInfo from './SecretInfo';
import style from '../../style.module.scss';

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
        id="title"
      >
        <h1>VIEW SECRET</h1>
      </Grid>
      {secret && 'ownerUuid' in secret && secret.ownerUuid === uuid && (
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
          id="owner"
        >
          <Box
            style={{
              width: '100%',
              padding: 10,
              maxWidth: '1000px'
            }}
          >
            <OwnerInfo secret={secret} />
          </Box>
        </Grid>
      )}
      <Grid
        xs={12}
        item
        display="flex"
        alignItems="center"
        justifyContent="center"
        id="secret"
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
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        id="createNew"
      >
        <Button
          variant="contained"
          style={{ background: style.gradientRedWhite, color: style.white }}
          onClick={() => {
            navigate(URLS.CREATE_SECRET);
          }}
        >
          Create new secret
        </Button>
      </Grid>
    </Grid>
  );
};
export default ViewSecretPage;
