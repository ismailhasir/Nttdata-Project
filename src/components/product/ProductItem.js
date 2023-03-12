import { Box, styled, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './ProductImage';

const ProductWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '8px',
  alignItems: 'flex-start',
  padding: '8px',
  border: '1px solid #e6e6e6',
  borderRadius: '4px',
  width: '428px',
  height: '381px',
  [theme.breakpoints.up("mobile")]: {
    width: '164px',
    height: '276px',
  },
  [theme.breakpoints.up("tablet")]: {
    width: '285px',
    height: '375px',
  },
}));

const ProductBodyWrapper = styled('div')({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  height:'50%'
});

const ProductItem = (props) => {
  const { item } = props;
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('tablet'));

  return (
    <ProductWrapper>
      <ProductImage item={item} />
      <ProductBodyWrapper>
        <Typography fontSize="16px" fontWeight={600}>Product Name</Typography>
        <Box sx={{ background: '#E6EEF8', width: '100%' }}>
          <Typography fontSize="16px" fontWeight={600} >{item.price.toLocaleString('tr-TR')}</Typography>
        </Box>
        <Typography fontSize="12px" fontWeight={500}>Description</Typography>
        {!isDesktop && item?.description?.length > 35 && !showAll ?
          <Box>
            <Typography fontSize="12px" fontWeight={500} display="inline">{`${item.description.substr(0, 35)}...`}</Typography>
            <Typography fontSize="12px" fontWeight={500} sx={{ color: '#0059BC', cursor: 'pointer', display: 'inline' }} onClick={() => { setShowAll(true); }}>devamını gör</Typography>
          </Box>
          :
          <>
            <Typography fontSize="12px" fontWeight={500}>{item.description}</Typography>
            <Typography fontSize="10px" fontWeight={400}>Ücretsiz - Aynı gün kargo</Typography>
          </>
        }
      </ProductBodyWrapper>
    </ProductWrapper>
  )
};

export default ProductItem;

ProductItem.propTypes = {
  item: PropTypes.object,
};