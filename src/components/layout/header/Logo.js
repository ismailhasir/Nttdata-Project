/* eslint-disable import/no-anonymous-default-export */
import { Box } from "@mui/material";

export default () => {

  return (
    <Box
      sx={{
        width: '25vw',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box component="img" src="/assets/img/logo.svg" alt="" sx={{ width: 170, height: 25, cursor: 'pointer' }} />
    </Box>
  )
};