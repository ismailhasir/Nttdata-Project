/* eslint-disable import/no-anonymous-default-export */
import { Search } from "@mui/icons-material"
import { Box, Button } from "@mui/material"

export default () => {

  return (
    <Box
      sx={{
        width: '25vw',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
      }}
    >
      <Button
        sx={{
          backgroundColor: '#0059BC',
          width: 110
        }}
        variant="contained"
      >
        <Search />
      </Button>
    </Box>
  )
}