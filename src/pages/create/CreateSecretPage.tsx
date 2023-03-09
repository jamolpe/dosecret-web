import { Box, Button, Grid, TextareaAutosize, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import Section from '../../components/common/Section';
import Separator from '../../components/common/Separator';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DATE_FORMAT } from '../../utils/dates';
import dayjs, { Dayjs } from 'dayjs';
import style from '../../style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createSecret } from '../../store/reducers/secret/secret-actions';
import {
  resetCreated,
  secretSelector
} from '../../store/reducers/secret/secret-reducer';
import { useNavigate } from 'react-router-dom';
import { processTemplate, URLS } from '../../utils/constants';

const CreateSecretPage = () => {
  const dispatch = useDispatch();
  const [secretText, setSecretText] = useState('');
  const [expirationDate, setExpirationDate] = useState<Dayjs>(
    dayjs().add(7, 'day')
  );
  const navigate = useNavigate();
  const { creating, createdSecret } = useSelector(secretSelector);

  const handleExpirationChange = (newValue: Dayjs | null) => {
    if (newValue) setExpirationDate(newValue);
  };

  useEffect(() => {
    dispatch(resetCreated());
  }, []);

  useEffect(() => {
    if (!creating && createdSecret)
      navigate(
        processTemplate(URLS.SELECTED_SECRET, { uuid: createdSecret.ownerUuid })
      );
  }, [createdSecret]);

  const createClick = () => {
    const secret = {
      secret: secretText,
      date: dayjs().toDate(),
      expires: expirationDate.toDate(),
      maxUsages: 4
    };
    dispatch(createSecret(secret));
  };
  return (
    <Grid
      container
      rowSpacing={4.5}
      columnSpacing={2.75}
      style={{
        width: '100%',
        maxWidth: '1000px',
        padding: 10
      }}
    >
      <Grid item xs={12} id="title">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ width: '100%' }}
        >
          <h1>GENERATE SECRET</h1>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        id="secret"
      >
        <Box style={{ width: '100%' }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Provide secret"
            value={secretText}
            onChange={(e) => setSecretText(e.target.value)}
            style={{
              minHeight: 50,
              width: '99%',
              backgroundColor: style.textBackground,
              borderRadius: 5,
              borderColor: style.borderColor
            }}
          />
          <Section style={{ marginTop: 10, background: style.whiteColor }}>
            <Separator>Expiration date</Separator>
            <Box
              style={{
                width: '100%',
                justifyContent: 'center',
                display: 'flex',
                marginTop: 20
              }}
            >
              <DateTimePicker
                className="input-lang"
                label="Expiration"
                minDate={dayjs()}
                inputFormat={DATE_FORMAT}
                value={expirationDate}
                onChange={handleExpirationChange}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </Box>
          </Section>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop={5}
        id="create"
      >
        <Button
          variant="contained"
          onClick={createClick}
          style={{
            background: style.gradientGreenYellow,
            color: style.blackColor
          }}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateSecretPage;
