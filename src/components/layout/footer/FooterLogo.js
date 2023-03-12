/* eslint-disable import/no-anonymous-default-export */
import { Box } from "@mui/material";

export default () => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Box component="img" src="/assets/img/footer-logo.svg" alt="" sx={{ width: 170, height: 42, cursor: 'pointer', }} />
    </Box>
  )
};