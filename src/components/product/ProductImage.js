/* eslint-disable import/no-anonymous-default-export */
import { Box } from "@mui/material";
import { Favorite } from "../../assets/icons";
import useBasket from "../../hooks/useBasket";

export default (props) => {
  const { item } = props;
  const { toggleItem, hasAddedItem } = useBasket()
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        height: '50%',
        position: 'relative',
        backgroundImage: `url(${item.imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 10,
        width: 20,
        height: 20,
        background: '#fff',
        borderRadius: '10px',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)'
        }
      }}
        onClick={() => {
          toggleItem(item);
        }}
      >
        <Favorite fill={hasAddedItem(item) ? '#e81224' : '#D1D1D1'} />
      </Box>
    </Box>
  );
};

