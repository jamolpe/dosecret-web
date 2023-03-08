import { Box, Grid } from '@mui/material';
import NotValid from './NotValid';

const NotFound = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <h1>Not Found</h1>
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
          <NotValid />;
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotFound;
