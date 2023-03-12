/* eslint-disable import/no-anonymous-default-export */

import { styled } from "@mui/material";
import Product from "../product";
import Slider from "../slider";
import Footer from "./footer";
import Header from "./header";

const LayoutWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default () => {
  return (
    <LayoutWrapper >
      <Header />
      <Slider />
      <Product />
      <Footer />
    </LayoutWrapper>
  )
}