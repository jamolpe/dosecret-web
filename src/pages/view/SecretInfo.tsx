import { TextareaAutosize, Box, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Section from '../../components/common/Section';
import Separator from '../../components/common/Separator';
import { DATE_FORMAT } from '../../utils/dates';
import style from '../../style.module.scss';
import { Secret, SecretOwner } from '../../services/models/secret';

type SecretInfoProps = {
  secret: Secret | SecretOwner;
};

const SecretInfo = ({ secret }: SecretInfoProps) => {
  return (
    <>
      <TextareaAutosize
        disabled={true}
        aria-label="minimum height"
        minRows={3}
        placeholder="Provide secret"
        value={secret.secret}
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
            disabled={true}
            minDate={dayjs()}
            inputFormat={DATE_FORMAT}
            value={secret?.expires}
            renderInput={(params) => <TextField size="small" {...params} />}
            onChange={(val) => {
              console.log(val);
            }}
          />
        </Box>
      </Section>
    </>
  );
};

export default SecretInfo;
