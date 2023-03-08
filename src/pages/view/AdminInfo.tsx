import { Box, Tooltip } from '@mui/material';
import Section from '../../components/common/Section';
import Separator from '../../components/common/Separator';
import { SecretOwner } from '../../services/models/secret';
import style from '../../style.module.scss';
import { processTemplate, URLS } from '../../utils/constants';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';

type AdminInfoProps = {
  secret: SecretOwner;
};

const OwnerInfo = ({ secret }: AdminInfoProps) => {
  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  let url: string | undefined;
  if (secret.uuid) {
    url =
      window.location.host +
      processTemplate(URLS.SELECTED_SECRET, {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        uuid: secret.uuid
      });
  }

  return (
    <Section style={{ background: style.whiteColor }}>
      <Separator>Share URL</Separator>
      <Tooltip
        open={open}
        title="Copied"
        onClose={handleTooltipClose}
        disableFocusListener
      >
        <Box
          style={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            cursor: url && 'pointer',
            background: url && style.orangeColor
          }}
          onClick={() => {
            if (url) {
              navigator.clipboard.writeText(url);
              handleTooltipOpen();
            }
          }}
        >
          <span>{secret.uuid}</span>
          <ContentCopyIcon style={{ marginLeft: 10 }} />
        </Box>
      </Tooltip>
    </Section>
  );
};

export default OwnerInfo;
