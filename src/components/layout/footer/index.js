/* eslint-disable import/no-anonymous-default-export */
import { Box, Divider } from "@mui/material";
import BigPart from "./BigPart";
import SmallPart from "./SmallPart";

export default () => {

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        bottom: 0,
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BigPart />
        <Divider sx={{ borderColor: '#fff', width: '100%' }} />
        <SmallPart />
      </Box>
    </Box>
  )
};