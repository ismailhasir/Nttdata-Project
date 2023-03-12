/* eslint-disable import/no-anonymous-default-export */
import { Box, FormGroup, MenuItem, TextField } from "@mui/material";


export default () => {

  return (
    <Box
      sx={{
        width: '50vw',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
      }}
    >
      <FormGroup
        row
        sx={{
          border: '1px solid #89919a',
          borderRadius: '4px',
          width: '100%',
          height: '100%',
          mx: 5,
        }}
      >
        <TextField
          fullWidth
          sx={{
            flex: 8,
            '&.MuiInputBase-input': {
              height: '100%'
            }
          }}
          variant="standard"
          InputProps={{ disableUnderline: true }}
        />
        <TextField
          fullWidth
          select
          variant="standard"
          sx={{
            flex: 2,
            backgroundColor: '#F4F5F6',
            '&MuiInputBase-root fieldset': {
              border: 'unset'
            },
            borderRadius: '4px'
          }}
          InputProps={{ disableUnderline: true }}
        >
          <MenuItem>test</MenuItem>
        </TextField>
      </FormGroup>
    </Box>
  )
};