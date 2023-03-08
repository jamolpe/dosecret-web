import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import style from '../../style.module.scss';
import { URLS } from '../../utils/constants';

const NotValid = () => {
  const navigate = useNavigate();

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
      <h2 style={{ color: style.redColor }}>Not valid id</h2>
      <Button
        variant="contained"
        style={{ background: style.gradientRedWhite, color: style.white }}
        onClick={() => {
          navigate(URLS.CREATE_SECRET);
        }}
      >
        Create Secret
      </Button>
    </Box>
  );
};

export default NotValid;
