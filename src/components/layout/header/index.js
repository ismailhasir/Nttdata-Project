/* eslint-disable import/no-anonymous-default-export */
import { Toolbar, styled, Box, Divider } from "@mui/material"
import { screenSizes } from "../../../constants";
import AutoCompleteComponent from "./Autocomplete";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const HeaderWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
}));

const NavbarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%',

}));

const NavbarMenuWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '100%',
  width: '100%',
}));

export default () => {

  return (
    <HeaderWrapper>
      <Toolbar sx={{
        minHeight: 160,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 'unset'
      }}
      >
        <NavbarWrapper maxWidth="desktop">
          <Logo />
          <AutoCompleteComponent />
          <SearchButton />
        </NavbarWrapper>
        <Divider sx={{ borderColor: '#a6acb3', width: '100%' }} />
        <NavbarMenuWrapper maxWidth="desktop">
          <NavbarMenu />
        </NavbarMenuWrapper>
      </Toolbar>
    </HeaderWrapper>
  )
}