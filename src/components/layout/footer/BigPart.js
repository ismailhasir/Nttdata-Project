/* eslint-disable import/no-anonymous-default-export */
import { Box, Button, FormGroup, styled, TextField, Typography } from "@mui/material";
import ColumnMenu from "./ColumnMenu";
import FooterLogo from "./FooterLogo";

const ShowOnlyDesktopColumnMenu = styled(ColumnMenu)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.down("desktop")]: {
    display: 'none',
  }
}));

const ColumnMenuWrapper = styled(Box)(({ theme }) => ({
  flex: '50%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '50px 120px',
  [theme.breakpoints.down("tablet")]: {
    display: 'none',
  }
}));

export default () => {

  return (
    <Box sx={{
      flex: '80%',
      display: 'flex',
      flexFlow: 'row nowrap',
      maxWidth: 'desktop',
      width: '100%',
      padding: {
        tablet: 'unset',
        desktop: 'unset',
        mobile: '16px',
      }
    }}>
      <Box
        sx={{
          flex: '50%',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'flex-start',
          alignItem: 'flex-start',
          py: '50px',
        }}
      >
        <FooterLogo />
        <Typography color="#fff" sx={{ mt: 1, }}>Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.</Typography>
        <FormGroup
          row
          sx={{
            maxWidth: 400,
            height: '38px',
            mt: 5,
            flexWrap: 'nowrap'
          }}
        >
          <TextField
            sx={{
              flex: '85%',
              backgroundColor: '#fff',
            }}
            InputProps={{
              disableUnderline: true
            }}
            fullWidth
            variant="standard"
            placeholder="Email"
          />
          <Button
            sx={{
              flex: '20%',
              fontSize: '16px',
              fontWeight: 400,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              color: '#fff'
            }}
            variant="contained"
            fullWidth
            color="action"
          >
            Sign Up
          </Button>
        </FormGroup>
      </Box>
      <ColumnMenuWrapper>
        <ColumnMenu />
        <ShowOnlyDesktopColumnMenu />
        <ShowOnlyDesktopColumnMenu />
      </ColumnMenuWrapper>
    </Box>
  )
};
