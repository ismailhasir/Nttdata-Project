/* eslint-disable import/no-anonymous-default-export */
import { Box, Link, Typography } from "@mui/material";

export default () => {

  return (
    <Box sx={{
      flex: '15%',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      // px: '120px',
      width: '100%',
      maxWidth: 'desktop',
    }}>
      <Link
        sx={{ cursor: 'pointer' }}
        fontSize={20}
        href="mailto:contact@nttdata.com"
        color="#fff"
      >
        contact@nttdata.com
      </Link>
      <Typography
        color="#fff"
        fontSize={20}
      >
        +3 9876 765 444
      </Typography>
      <Box component="img" src="/assets/img/social-links.svg" />
    </Box>
  )
};
